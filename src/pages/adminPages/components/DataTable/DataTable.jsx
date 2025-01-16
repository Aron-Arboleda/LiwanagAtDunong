import React, { useState } from "react";
import "./DataTable.css";
import { checkNull } from "@utils/functions";
import Search from "lucide-react/dist/esm/icons/search";

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

  const formatDate = (value) => {
    const filteredValue = checkNull(value);
    if (filteredValue === "--") return filteredValue;

    // Check if the value is a date-only string (YYYY-MM-DD format)
    const dateOnlyRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (typeof value === "string" && dateOnlyRegex.test(value)) {
      const date = new Date(value);
      const options = { year: "numeric", month: "short", day: "numeric" };
      return isNaN(date)
        ? value
        : new Intl.DateTimeFormat("en-US", options).format(date);
    }

    // Parse and format full date-time values
    const date = new Date(value);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return isNaN(date)
      ? value
      : new Intl.DateTimeFormat("en-US", options).format(date);
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
      {/* Search Input with Button */}
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search"
          onChange={handleFilterChange}
          className="searchInput"
        />
        <span
          onClick={() => setSearchValue(searchValue)}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
        >
          <Search size={20} style={{ paddingBottom: "9px" }} />
        </span>
      </div>

      <div className="adminTableContainer">
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
                  <td key={column.key}>
                    {/* Check if the value is a date and format it */}
                    {column.format === "date" || column.format === "datetime"
                      ? formatDate(row[column.key])
                      : checkNull(row[column.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
