import { useState, useMemo, useCallback, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { tableHeaders } from './static';
import { changeWorkload, getWorkload } from '../../api/load';
import { useAuth } from '../../hooks/useAuth';
import { agGridRu } from '../../assets/agLocalization';

function MainTable() {
  const gridRef = useRef();
  const [rowData, setRowData] = useState(null);
  const { user } = useAuth();

  const [columnDefs] = useState(tableHeaders);

  const defaultColDef = useMemo(() => {
    return {
      filter: 'agTextColumnFilter',
      // floatingFilter: true,
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
    // autoSizeAll(false);
    getWorkload(user.access_token).then((data) => {
      console.log(data);
      setRowData(data);
    });
    autoSizeAll(false);
  }, [autoSizeAll, user.access_token]);

  const onCellEditingStarted = useCallback((event) => {
    console.log('cellEditingStarted');
  }, []);

  const onCellEditingStopped = useCallback(
    (event) => {
      changeWorkload(
        { ...event.data, flowNumber: +event.data.flowNumber },
        user.access_token,
      ).then((data) => console.log('GREAT'));
      // console.log({ ...event.data, flowNumber: +event.data.flowNumber }, 'hello');
      // console.log(event.data)
      console.log('cellEditingStopped');
    },
    [user.access_token],
  );

  return (
    <div className="ag-theme-alpine" style={{ height: 600 }}>
      <AgGridReact
        localeText={agGridRu}
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
