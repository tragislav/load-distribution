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
