import { useState, useMemo, useCallback, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { tableHeaders } from './static';
import { changeWorkload, getWorkload } from '../../api/load';
import { useAuth } from '../../hooks/useAuth';
import { agGridRu } from '../../assets/agLocalization';
import ModalButtonCellRenderer from './ButtonCell';

const frameworkComponents = {
  modalButtonCellRenderer: ModalButtonCellRenderer,
};

function MainTable() {
  const { user } = useAuth();

  const gridRef = useRef();
  const [rowData, setRowData] = useState(null);
  const [columnDefs] = useState(tableHeaders);

  const defaultColDef = useMemo(() => {
    return {
      filter: 'agTextColumnFilter',
      resizable: true,
    };
  }, []);

  const columnTypes = useMemo(() => {
    return {
      editableColumn: {
        editable: true,
      },
    };
  }, []);

  const autoSizeAll = useCallback((skipHeader) => {
    const allColumnIds = [];
    gridRef.current.columnApi.getColumns().forEach((column) => {
      allColumnIds.push(column.getId());
    });
    gridRef.current.columnApi.autoSizeColumns(allColumnIds, skipHeader);
  }, []);

  const onGridReady = useCallback(() => {
    getWorkload(user.access_token).then((data) => {
      setRowData(data);
    });
  }, [user.access_token]);

  const onCellEditingStarted = useCallback((event) => {
    console.log('cellEditingStarted');
  }, []);

  const onCellEditingStopped = useCallback(
    (event) => {
      changeWorkload(
        { ...event.data, flowNumber: +event.data.flowNumber },
        user.access_token,
      ).then((data) => console.log('GREAT'));

      console.log('cellEditingStopped');
    },
    [user.access_token],
  );

  const onFirstDataRendered = () => {
    autoSizeAll(false);
  };

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="ag-theme-alpine" style={{ height: 600 }}>
      <AgGridReact
        onFirstDataRendered={onFirstDataRendered}
        localeText={agGridRu}
        frameworkComponents={frameworkComponents}
        ref={gridRef}
        defaultColDef={defaultColDef}
        rowData={rowData}
        columnDefs={columnDefs}
        columnTypes={columnTypes}
        onGridReady={onGridReady}
        onCellEditingStarted={onCellEditingStarted}
        onCellEditingStopped={onCellEditingStopped}
      ></AgGridReact>
    </div>
  );
}

export default MainTable;

// let arr = [{ number: 10 }, { number: 20 }, { number: 10 }, { number: 15 }];

// let groups = arr.reduce((acc, obj) => {
//   if (!acc[obj.number]) {
//     acc[obj.number] = [];
//   }
//   acc[obj.number].push(obj);
//   return acc;
// }, {});

// console.log(groups);

// for (let number in groups) {
//   console.log(`Обрабатываем группу с number = ${number}`);
//   for (let obj of groups[number]) {
//     console.log(obj);
//   }
// }
