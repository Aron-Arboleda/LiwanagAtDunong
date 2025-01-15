import React, { useState } from "react";

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
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handleFilterChange}
        style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
      />
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                onClick={() => handleSort(column.key)}
                style={{
                  cursor: "pointer",
                  borderBottom: "2px solid #ddd",
                  padding: "10px",
                }}
              >
                {column.label}{" "}
                {sortColumn === column.key &&
                  (sortDirection === "asc" ? "\u2191" : "\u2193")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex} style={{ borderBottom: "1px solid #ddd" }}>
              {columns.map((column) => (
                <td key={column.key} style={{ padding: "10px" }}>
                  {row[column.key]}
                </td>
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
