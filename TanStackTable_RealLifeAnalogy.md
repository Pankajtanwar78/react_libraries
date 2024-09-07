Certainly! Here’s a detailed and comprehensive explanation of each property and method in TanStack Table v8, illustrated with practical examples and TypeScript code.

### **Properties and Methods Breakdown**

#### **1. `getTableProps`**

- **Returns**: Props for the `<table>` element.
- **Usage**: Apply these props to the `<table>` element to configure its rendering, accessibility, and styling.

**Example**:
```jsx
<table {...getTableProps()}>
  {/* Table content here */}
</table>
```
*Real-Life Example*: This is like setting up the main container for a list of products. It ensures that the table is properly configured for styling and functionality.

#### **2. `getTableBodyProps`**

- **Returns**: Props for the `<tbody>` element.
- **Usage**: Apply these props to the `<tbody>` element to handle table body-specific attributes.

**Example**:
```jsx
<tbody {...getTableBodyProps()}>
  {/* Table rows here */}
</tbody>
```
*Real-Life Example*: This is similar to preparing the section of a product list that contains the actual items, like the section where the product details will be displayed.

#### **3. `getHeaderGroups`**

- **Returns**: Header groups including headers.
- **Usage**: Render table headers, often used to create column headers in the table.

**Example**:
```jsx
<thead>
  {getHeaderGroups().map(headerGroup => (
    <tr key={headerGroup.id}>
      {headerGroup.headers.map(column => (
        <th key={column.id}>
          {column.renderHeader()}
        </th>
      ))}
    </tr>
  ))}
</thead>
```
*Real-Life Example*: This is like the header row of a product table that displays "Product Name", "Price", "Rating", etc.

#### **4. `getFooterGroups`**

- **Returns**: Footer groups including headers.
- **Usage**: Render table footers, often used for summary information.

**Example**:
```jsx
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
```
*Real-Life Example*: This is like the footer of a product table that might display totals or other summary data.

#### **5. `getRowModel`**

- **Returns**: Row model including rows and cells.
- **Usage**: Render rows and cells based on the row model data.

**Example**:
```jsx
<tbody {...getTableBodyProps()}>
  {getRowModel().rows.map(row => {
    prepareRow(row);
    return (
      <tr key={row.id}>
        {row.cells.map(cell => (
          <td key={cell.id}>
            {cell.renderCell()}
          </td>
        ))}
      </tr>
    );
  })}
</tbody>
```
*Real-Life Example*: This represents the data rows of a product table, where each row contains information like product name, price, and rating.

#### **6. `getPagination`**

- **Returns**: Pagination state and methods.
- **Methods**:
  - **`nextPage`**: Moves to the next page.
  - **`previousPage`**: Moves to the previous page.
  - **`canNextPage`**: Checks if there’s a next page.
  - **`canPreviousPage`**: Checks if there’s a previous page.
  - **`gotoPage`**: Goes to a specific page.
  - **`setPageSize`**: Sets the number of rows per page.

**Example**:
```jsx
const { nextPage, previousPage, canNextPage, canPreviousPage, gotoPage, setPageSize } = getPagination();

return (
  <>
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
  </>
);
```
*Real-Life Example*: Like navigating through multiple pages of products on an e-commerce site.

#### **7. `getSorting`**

- **Returns**: Sorting state and methods.
- **Methods**:
  - **`sortBy`**: Array of sort descriptors.
  - **`setSorting`**: Updates sorting state.

**Example**:
```jsx
const { sortBy, setSorting } = getSorting();

return (
  <table {...getTableProps()}>
    <thead>
      {getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(column => (
            <th
              key={column.id}
              onClick={() => setSorting([{ id: column.id, desc: !sortBy[0]?.desc }])}
            >
              {column.renderHeader()}
              {sortBy.some(sort => sort.id === column.id) ? (sortBy[0]?.desc ? ' 🔽' : ' 🔼') : ''}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  </table>
);
```
*Real-Life Example*: Sorting products by price or rating.

#### **8. `getColumnFilters`**

- **Returns**: Column filter state and methods.
- **Methods**:
  - **`filters`**: Current column filters.
  - **`setFilters`**: Updates column filters.

**Example**:
```jsx
const { filters, setFilters } = getColumnFilters();

return (
  <div>
    {filters.map(filter => (
      <input
        key={filter.id}
        value={filter.value || ''}
        onChange={e => setFilters([{ id: filter.id, value: e.target.value }])}
      />
    ))}
  </div>
);
```
*Real-Life Example*: Filtering products by category, brand, or other attributes.

#### **9. `getGlobalFilter`**

- **Returns**: Global filter value.
- **Methods**:
  - **`setGlobalFilter`**: Updates the global filter.

**Example**:
```jsx
const { globalFilter, setGlobalFilter } = getGlobalFilter();

return (
  <input
    value={globalFilter || ''}
    onChange={e => setGlobalFilter(e.target.value)}
    placeholder="Search products..."
  />
);
```
*Real-Life Example*: A search bar that filters the entire product list based on keywords.

#### **10. `setGlobalFilter`**

- **Usage**: Updates the global filter state.

**Example**:
```jsx
setGlobalFilter('Smartphone');
```
*Real-Life Example*: Applying a search term to filter products across all columns.

#### **11. `setColumnFilters`**

- **Usage**: Updates the column filters state.

**Example**:
```jsx
setColumnFilters([{ id: 'category', value: 'Electronics' }]);
```
*Real-Life Example*: Filtering products to show only those in a specific category.

#### **12. `prepareRow`**

- **Usage**: Must be called before rendering each row to ensure proper functionality.

**Example**:
```jsx
{getRowModel().rows.map(row => {
  prepareRow(row);
  return (
    <tr key={row.id}>
      {row.cells.map(cell => (
        <td key={cell.id}>{cell.renderCell()}</td>
      ))}
    </tr>
  );
})}
```
*Real-Life Example*: Preparing each product row for display, ensuring all data is correctly formatted.

#### **13. `getColumnVisibility`**

- **Returns**: Methods for managing column visibility.
- **Methods**:
  - **`setColumnVisibility`**: Updates column visibility.

**Example**:
```jsx
const { setColumnVisibility } = getColumnVisibility();

return (
  <div>
    <button onClick={() => setColumnVisibility({ 'image': false })}>
      Hide Image Column
    </button>
  </div>
);
```
*Real-Life Example*: Showing or hiding specific columns like product images.

#### **14. `getColumnOrder`**

- **Returns**: Column order information.
- **Methods**:
  - **`setColumnOrder`**: Updates column order.

**Example**:
```jsx
const { setColumnOrder } = getColumnOrder();

return (
  <button onClick={() => setColumnOrder(['name', 'price', 'rating'])}>
    Reorder Columns
  </button>
);
```
*Real-Life Example*: Rearranging columns such as displaying "Price" before "Rating".

#### **15. `getState`**

- **Returns**: Current table state.
- **Properties**:
  - **`pagination`**: Includes pageIndex, pageSize, pageCount, and pageOptions.
  - **`sorting`**: Array of sort descriptors.
  - **`columnFilters`**: Current column filters.
  - **`columnVisibility`**: Current column visibility.

**Example**:
```jsx
const { globalFilter, columnFilters, pagination, sorting, columnVisibility } = getState();
```
*Real-Life Example*: Snapshot of the table’s current settings and data, like the current page, applied

 filters, and column sorting.

#### **16. `getPageCount`**

- **Returns**: Total number of pages.
- **Usage**: Used to display pagination information.

**Example**:
```jsx
const pageCount = getPageCount();

return (
  <span>
    Total Pages: {pageCount}
  </span>
);
```
*Real-Life Example*: Displaying the total number of pages in a product catalog.

#### **17. `getPageOptions`**

- **Returns**: Array of page options (page numbers).
- **Usage**: Used for rendering page options in pagination controls.

**Example**:
```jsx
const pageOptions = getPageOptions();

return (
  <select onChange={e => gotoPage(Number(e.target.value))}>
    {pageOptions.map(page => (
      <option key={page} value={page}>
        Page {page}
      </option>
    ))}
  </select>
);
```
*Real-Life Example*: Dropdown menu for selecting a specific page number.

#### **18. `getColumnProps`**

- **Returns**: Column props for a specific column.
- **Usage**: To access props for individual columns, like Header or Cell.

**Example**:
```jsx
const columnProps = getColumnProps(column.id);

return (
  <th {...columnProps}>
    {column.renderHeader()}
  </th>
);
```
*Real-Life Example*: Setting specific attributes for a column header, such as styling or data attributes.

#### **19. `getRowProps`**

- **Returns**: Props for the row.
- **Usage**: Apply these props to each row element for row-specific behavior.

**Example**:
```jsx
const rowProps = getRowProps(row.id);

return (
  <tr {...rowProps}>
    {row.cells.map(cell => (
      <td key={cell.id}>{cell.renderCell()}</td>
    ))}
  </tr>
);
```
*Real-Life Example*: Setting attributes or event handlers for each row in the table.

#### **20. `getCellProps`**

- **Returns**: Props for the cell.
- **Usage**: Apply these props to each cell element for cell-specific behavior.

**Example**:
```jsx
const cellProps = getCellProps(cell.id);

return (
  <td {...cellProps}>
    {cell.renderCell()}
  </td>
);
```
*Real-Life Example*: Adding styling or event handlers to individual cells, like making cells clickable.

#### **21. `getTableInstance`**

- **Returns**: The table instance itself.
- **Usage**: Access the entire table instance for debugging or advanced use cases.

**Example**:
```jsx
const tableInstance = getTableInstance();

// Use tableInstance for debugging or advanced manipulation
```
*Real-Life Example*: Inspecting or manipulating the entire table programmatically for custom functionalities.

### **TypeScript Example Using TanStack Table v8**

Here's a complete TypeScript example integrating all the properties and methods explained:

```typescript
import React, { useMemo } from 'react';
import { useReactTable, getCoreRowModel, getGlobalFilterRowModel, getColumnVisibilityRowModel } from '@tanstack/react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import './table.css';
import { GlobalFilter } from './GlobalFilter';
import { ColumnFilter } from './ColumnFilter';

export const FilteringTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const table = useReactTable({
    data,
    columns,
    columnFilters: [],
    globalFilter: '',
    getCoreRowModel: getCoreRowModel(),
    getGlobalFilterRowModel: getGlobalFilterRowModel(),
    getColumnVisibilityRowModel: getColumnVisibilityRowModel(),
    onGlobalFilterChange: (globalFilter) => table.setGlobalFilter(globalFilter),
    onColumnFiltersChange: (columnFilters) => table.setColumnFilters(columnFilters),
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
    getColumnOrder,
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
    columnVisibility
  } = getState();

  const {
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    setPageSize
  } = getPagination();

  const { sortBy, setSorting } = getSorting();
  const { filters, setFilters } = getColumnFilters();

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(column => (
                <th key={column.id} {...getColumnProps(column.id)}>
                  {column.renderHeader()}
                  <div>
                    {column.getIsFiltered() ? column.renderFilter() : null}
                  </div>
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
        <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 30, 40].map(size => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
```

This example illustrates how to use TanStack Table's properties and methods to build a fully functional table with filtering, sorting, pagination, and more, applying real-world logic like managing table columns, rows, and data interactions.
