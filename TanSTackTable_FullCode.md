To integrate all possible functionalities of TanStack Table v8 into a single TypeScript component, we'll include pagination, sorting, filtering, column visibility, column ordering, and global filtering, as well as demonstrate how to manage state and apply these features together. Here’s a comprehensive example with all functionalities incorporated:

```typescript
import React, { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getGlobalFilterRowModel,
  getColumnVisibilityRowModel,
  getColumnOrderRowModel,
  getSortingRowModel,
  getPaginationRowModel,
  getColumnFiltersRowModel,
  TableOptions
} from '@tanstack/react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import './table.css';
import { GlobalFilter } from './GlobalFilter';
import { ColumnFilter } from './ColumnFilter';

export const AdvancedTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getGlobalFilterRowModel: getGlobalFilterRowModel(),
    getColumnVisibilityRowModel: getColumnVisibilityRowModel(),
    getColumnOrderRowModel: getColumnOrderRowModel(),
    getSortingRowModel: getSortingRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getColumnFiltersRowModel: getColumnFiltersRowModel(),
    meta: {
      defaultColumn: {
        Filter: ColumnFilter
      }
    }
  });

  const {
    getTableProps,
    getTableBodyProps,
    getHeaderGroups,
    getFooterGroups,
    getRowModel,
    getPagination,
    getSorting,
    getColumnFilters,
    getGlobalFilter,
    setGlobalFilter,
    setColumnFilters,
    prepareRow,
    getColumnVisibility,
    setColumnVisibility,
    getColumnOrder,
    setColumnOrder,
    getState,
    getPageCount,
    getPageOptions,
    getColumnProps,
    getRowProps,
    getCellProps
  } = table;

  const {
    globalFilter,
    columnFilters,
    pagination: { pageIndex, pageSize, pageCount, pageOptions },
    sorting,
    columnVisibility,
    columnOrder
  } = getState();

  const { nextPage, previousPage, canNextPage, canPreviousPage, gotoPage, setPageSize } = getPagination();
  const { sortBy, setSorting } = getSorting();
  const { filters, setFilters } = getColumnFilters();
  const { setColumnVisibility } = getColumnVisibility();
  const { setColumnOrder } = getColumnOrder();

  return (
    <>
      {/* Global Filter */}
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

      {/* Column Filters */}
      <div>
        {filters.map(filter => (
          <input
            key={filter.id}
            value={filter.value || ''}
            onChange={e => setFilters([{ id: filter.id, value: e.target.value }])}
            placeholder={`Filter ${filter.id}`}
          />
        ))}
      </div>

      {/* Table */}
      <table {...getTableProps()}>
        <thead>
          {getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(column => (
                <th
                  key={column.id}
                  {...getColumnProps(column.id)}
                  onClick={() => setSorting([{ id: column.id, desc: !sortBy[0]?.desc }])}
                >
                  {column.renderHeader()}
                  {sortBy.some(sort => sort.id === column.id) ? (sortBy[0]?.desc ? ' 🔽' : ' 🔼') : ''}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {getRowModel().rows.map(row => {
            prepareRow(row);
            return (
              <tr key={row.id} {...getRowProps(row.id)}>
                {row.cells.map(cell => (
                  <td key={cell.id} {...getCellProps(cell.id)}>
                    {cell.renderCell()}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(column => (
                <td key={column.id}>
                  {column.renderFooter()}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>

      {/* Pagination */}
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage()}>
          Previous Page
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage()}>
          Next Page
        </button>
        <span>
          Page {pageIndex + 1} of {pageCount}
        </span>
        <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
          {[10, 20, 30, 40].map(size => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>

      {/* Column Visibility */}
      <div>
        {columns.map(column => (
          <label key={column.id}>
            <input
              type="checkbox"
              checked={columnVisibility[column.id] ?? true}
              onChange={() => setColumnVisibility(prev => ({
                ...prev,
                [column.id]: !prev[column.id]
              }))}
            />
            {column.header}
          </label>
        ))}
      </div>

      {/* Column Ordering */}
      <div>
        <button onClick={() => setColumnOrder(['price', 'rating', 'name'])}>
          Order Columns
        </button>
      </div>
    </>
  );
};
```

### **Added Functionalities:**

1. **Global Filter**: The `GlobalFilter` component allows for text-based filtering across all columns.

2. **Column Filters**: Added inputs for each column to filter based on column-specific values.

3. **Sorting**: Clicking on column headers toggles sorting direction and applies sorting to the table.

4. **Pagination**: Includes buttons to navigate between pages, a dropdown to select page size, and displays current page information.

5. **Column Visibility**: Checkboxes to toggle the visibility of each column in the table.

6. **Column Ordering**: A button to reorder columns as an example; it sets the order of columns based on provided IDs.

### **Explanation of the Added Functionalities:**

- **Global Filter**: Enables filtering across all data based on the global search term.
- **Column Filters**: Provides per-column filtering to narrow down results based on individual column data.
- **Sorting**: Allows sorting of columns by clicking on headers, supporting both ascending and descending orders.
- **Pagination**: Handles page navigation and page size selection, managing how many rows are displayed per page and navigating between pages.
- **Column Visibility**: Allows users to show or hide columns dynamically.
- **Column Ordering**: Demonstrates how to reorder columns programmatically.

This setup provides a comprehensive view of how to implement and utilize various features of TanStack Table v8 in a single React component, applying real-world functionalities and interactions.
