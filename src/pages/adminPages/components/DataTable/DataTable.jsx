import React, { useEffect, useState } from "react";
import "./DataTable.css";
import { checkNull } from "@utils/functions";
import Search from "lucide-react/dist/esm/icons/search";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import { StandardButton } from "@components/Buttons/Buttons";
import Trash2 from "lucide-react/dist/esm/icons/trash-2";
import Pencil from "lucide-react/dist/esm/icons/pencil";
import { DarkBackgroundContainer } from "@components/LargeContainers/LargeContainers";
import { CartoonyContainer } from "@components/CardContainers/CardContainers";
import Form from "@components/Form/Form";
import { sections } from "@pages/VolunteerFormPage/sections";
import XButton from "@components/CustomComponents/CustomComponents";

const DataTable = ({ fetchData, columns, onDelete, onEdit }) => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedRows, setSelectedRows] = useState([]);
  const [editPanel, setEditPanel] = useState(false);

  const handleClose = () => {
    setEditPanel(false);
  };

  const refreshData = () => {
    fetchData().then((data) => setData(data));
  };

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

  const handleRowSelect = (rowId) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(rowId)
        ? prevSelected.filter((id) => id !== rowId)
        : [...prevSelected, rowId]
    );
  };

  const handleDeleteSelected = () => {
    onDelete(selectedRows.map((x) => parseInt(x))).then(
      setSelectedRows([]),
      refreshData()
    );
  };

  const handleEditSelected = () => {
    if (selectedRows.length === 1) {
      setEditPanel(true);
    }
    console.log(selectedRows[0]);
  };

  const editFormSubmit = (formData) => {
    onEdit(selectedRows[0], formData).then(() => {
      refreshData();
      setEditPanel(false);
    });
  };

  const formatDate = (value) => {
    const filteredValue = checkNull(value);
    if (filteredValue === "--") return filteredValue;

    const dateOnlyRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (typeof value === "string" && dateOnlyRegex.test(value)) {
      const date = new Date(value);
      const options = { year: "numeric", month: "short", day: "numeric" };
      return isNaN(date)
        ? value
        : new Intl.DateTimeFormat("en-US", options).format(date);
    }

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

  const getValuesToEdit = () => {
    const row = sortedData.find(
      (row) => row.volunteer_form_submission_id === selectedRows[0]
    );
    const valuesToEdit = {
      defaultValues: row,
    };

    return valuesToEdit;
  };

  useEffect(() => {
    refreshData();

    const handleKeyDown = (event) => {
      if (event.key === "Delete" && selectedRows.length > 0) {
        handleDeleteSelected();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedRows]);

  return (
    <div className="dataTable">
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
          <Search size={20} style={{ paddingTop: "5px" }} />
        </span>
      </div>

      <div className="adminTableContainer">
        <table className="adminTable">
          <thead>
            <tr>
              <th>
                <Checkbox
                  onChange={(e) =>
                    setSelectedRows(
                      e.target.checked
                        ? sortedData.map(
                            (row) => row.volunteer_form_submission_id
                          )
                        : []
                    )
                  }
                  checked={
                    selectedRows.length > 0 &&
                    selectedRows.length === sortedData.length
                  }
                />
              </th>
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
              <tr
                key={rowIndex}
                style={{
                  backgroundColor: selectedRows.includes(
                    row.volunteer_form_submission_id
                  )
                    ? "lightblue"
                    : "",
                }}
              >
                <td>
                  <Checkbox
                    checked={selectedRows.includes(
                      row.volunteer_form_submission_id
                    )}
                    onChange={() =>
                      handleRowSelect(row.volunteer_form_submission_id)
                    }
                  />
                </td>
                {columns.map((column) => (
                  <td key={column.key}>
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

      {selectedRows.length > 0 && (
        <div className="actionButtons">
          <StandardButton
            buttonText="Delete"
            onClick={handleDeleteSelected}
            variant="critical"
            Icon={Trash2}
          />
          {/* <button className="deleteButton" onClick={handleDeleteSelected}>
            Delete Selected
          </button> */}
          {selectedRows.length === 1 && (
            <StandardButton
              buttonText="Edit"
              onClick={handleEditSelected}
              Icon={Pencil}
            />
          )}
        </div>
      )}

      {editPanel && (
        <DarkBackgroundContainer
          style={{ alignItems: "flex-start", padding: "2rem" }}
        >
          <div>
            <CartoonyContainer
              style={{
                maxWidth: "80vw",
                minHeight: "250px",
                margin: "0 1rem",
              }}
              handleClose={handleClose}
            >
              <XButton onClick={handleClose} />

              <Form
                sections={sections}
                disclaimerText="Please fill out the form below to edit the selected submission."
                formSubmit={editFormSubmit}
                defaultValues={getValuesToEdit()}
              />
            </CartoonyContainer>
          </div>
        </DarkBackgroundContainer>
      )}
    </div>
  );
};

export default DataTable;
