import React, { useState } from "react";
import "./DataTable.css";

const DataTable = ({ data, columns }) => {
  const [searchValue, setSearchValue] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleFilterChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const handleSort = (columnKey) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnKey);
      setSortDirection("asc");
    }
  };

  const filteredData = data.filter((row) =>
    columns.some((column) =>
      String(row[column.key]).toLowerCase().includes(searchValue)
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="dataTable">
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handleFilterChange}
        className="searchInput"
      />
      <table className="adminTable">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} onClick={() => handleSort(column.key)}>
                {column.label}{" "}
                {sortColumn === column.key &&
                  (sortDirection === "asc" ? "\u2191" : "\u2193")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

// Example usage:
// const data = [
//   { name: "Alice", age: 25, city: "New York" },
//   { name: "Bob", age: 30, city: "San Francisco" },
//   { name: "Charlie", age: 35, city: "Los Angeles" },
// ];

// const columns = [
//   { label: "Name", key: "name" },
//   { label: "Age", key: "age" },
//   { label: "City", key: "city" },
// ];

// <DataTable data={data} columns={columns} />
