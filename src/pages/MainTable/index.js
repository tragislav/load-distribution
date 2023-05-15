import { useState, useMemo, useCallback, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { tableHeaders, fakeRowData } from './static';

function MainTable() {
  const gridRef = useRef();
  const [rowData] = useState(fakeRowData);

  const [columnDefs] = useState(tableHeaders);

  const defaultColDef = useMemo(() => {
    return {
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
    autoSizeAll(false);
  }, [autoSizeAll]);

  return (
    <div className="ag-theme-alpine" style={{ height: 600 }}>
      <AgGridReact
        ref={gridRef}
        defaultColDef={defaultColDef}
        rowData={rowData}
        columnDefs={columnDefs}
        columnTypes={columnTypes}
        onGridReady={onGridReady}
      ></AgGridReact>
    </div>
  );
}

export default MainTable;
