import React, { useEffect, useState } from "react";
import "./DataTable.css";
import { checkNull, formatDate } from "@utils/helpers";
import Search from "lucide-react/dist/esm/icons/search";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import { StandardButton } from "@components/Buttons/Buttons";
import Trash2 from "lucide-react/dist/esm/icons/trash-2";
import Pencil from "lucide-react/dist/esm/icons/pencil";
import { DarkBackgroundContainer } from "@components/LargeContainers/LargeContainers";
import { CartoonyContainer } from "@components/CardContainers/CardContainers";
import Form from "@components/Form/Form";
import Plus from "lucide-react/dist/esm/icons/plus";
import { toast, ToastContainer } from "react-toastify";
import Archive from "lucide-react/dist/esm/icons/archive";
import Unarchive from "lucide-react/dist/esm/icons/archive-restore";
import ConfirmationPanel from "../ConfirmationPanel/ConfirmationPanel";
import ChevronLeft from "lucide-react/dist/esm/icons/chevron-left";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";
import { referenceValues } from "@pages/VolunteerFormPage/sections";

const references = Object.keys(referenceValues);
const mapReferenceValues = (value) => {
  if (references.includes(value)) {
    return referenceValues[value];
  }
  return value;
};

const toastStyle = {
  fontFamily: "Montserrat",
  fontSize: "0.9rem",
  paddingRight: "2rem",
};

export const showActionDoneMessage = (message, success = true) => {
  if (success) {
    toast.success(message, {
      style: toastStyle,
    });
  } else {
    toast.error(message, {
      style: toastStyle,
    });
  }
};

const removePasswordField = (fields) => {
  const newFields = fields.map((section) => ({
    ...section,
    fields: section.fields.filter((field) => field.name !== "password"),
  }));
  return newFields;
};

const defaultToggles = {
  archive: true,
  unarchive: false,
  delete: true,
  edit: true,
  create: true,
  checkboxes: true,
  newSubmission: true,
};

const defaultControllers = {
  fetchData: async () => {},
  onDelete: async () => {},
  onEdit: async () => {},
  onCreate: async () => {},
  onArchive: async () => {},
  onUnarchive: async () => {},
};

const DataTable = ({
  columns,
  toggles = defaultToggles,
  controllers = defaultControllers,
  formFields,
  rowsPerPage = 10, // Default to 10 rows per page
}) => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedRows, setSelectedRows] = useState([]);
  const [editPanel, setEditPanel] = useState(false);
  const [editing, setEditing] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  const handleClose = () => {
    setEditPanel(false);
  };

  const refreshData = async () => {
    const data = await controllers.fetchData();
    setData(data);
    // Reset to first page when data refreshes
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
    // Reset to first page when search changes
    setCurrentPage(1);
  };

  const handleSort = (columnKey) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnKey);
      setSortDirection("asc");
    }
    // Reset to first page when sorting changes
    setCurrentPage(1);
  };

  const handleRowSelect = (rowIndex) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(rowIndex)
        ? prevSelected.filter((id) => id !== rowIndex)
        : [...prevSelected, rowIndex]
    );
  };

  const handleArchiveSelected = async () => {
    const result = await controllers.onArchive(
      selectedRows.map((index) => sortedData[index])
    );
    if (!result.success) {
      showActionDoneMessage(result.message, result.success);
      return;
    }
    setSelectedRows([]);
    await refreshData();
    showActionDoneMessage(result.message, result.success);
  };

  const handleUnarchiveSelected = async () => {
    const result = await controllers.onUnarchive(
      selectedRows.map((index) => sortedData[index])
    );
    if (!result.success) {
      showActionDoneMessage(result.message, result.success);
      return;
    }
    setSelectedRows([]);
    await refreshData();
    showActionDoneMessage(result.message, result.success);
  };

  const handleDeleteSelected = async () => {
    const result = await controllers.onDelete(
      selectedRows.map((index) => sortedData[index])
    );
    if (!result.success) {
      showActionDoneMessage(result.message, result.success);
      return;
    }
    setSelectedRows([]);
    await refreshData();
    showActionDoneMessage(result.message, result.success);
  };

  const handleEditSelected = () => {
    if (selectedRows.length === 1) {
      setEditing(true);
      setEditPanel(true);
    }
  };

  const editFormSubmit = async (formData) => {
    const wholeData = { ...sortedData[selectedRows[0]], ...formData };
    const result = await controllers.onEdit(wholeData);
    if (!result.success) {
      showActionDoneMessage(result.message, result.success);
      return;
    }
    setSelectedRows([]);
    await refreshData();
    setEditPanel(false);
    showActionDoneMessage(result.message, result.success);
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

  // Pagination calculations
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = sortedData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    // Prevent going before first page or after last page
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Deselect rows when changing pages
      setSelectedRows([]);
    }
  };

  const getValuesToEdit = () => {
    const row = sortedData[selectedRows[0]];
    const valuesToEdit = {
      defaultValues: row,
    };

    return valuesToEdit;
  };

  const handleAddNewSubmission = () => {
    setEditing(false);
    setEditPanel(true);
  };

  const createFormSubmit = async (formData) => {
    const result = await controllers.onCreate(formData);
    console.log(`result`, result);

    if (!result.success) {
      showActionDoneMessage(result.message, result.success);
      return result;
    }
    await refreshData();
    setEditPanel(false);
    showActionDoneMessage(result.message, result.success);
    return result;
  };

  useEffect(() => {
    refreshData();

    const handleKeyDown = (event) => {
      if (event.key === "Delete" && selectedRows.length > 0) {
        setConfirmationOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
        <table
          className={`adminTable ${
            toggles.newSubmission ? "" : "withBorderBottom"
          }`}
        >
          <thead>
            <tr>
              {toggles.checkboxes && (
                <th>
                  <Checkbox
                    onChange={(e) =>
                      setSelectedRows(
                        e.target.checked
                          ? paginatedData.map(
                              (row, index) => startIndex + index
                            )
                          : []
                      )
                    }
                    checked={
                      selectedRows.length > 0 &&
                      selectedRows.length === paginatedData.length
                    }
                  />
                </th>
              )}
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
            {paginatedData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                style={{
                  backgroundColor: selectedRows.includes(startIndex + rowIndex)
                    ? "lightblue"
                    : "",
                }}
              >
                {toggles.checkboxes && (
                  <td>
                    <Checkbox
                      checked={selectedRows.includes(startIndex + rowIndex)}
                      onChange={() => handleRowSelect(startIndex + rowIndex)}
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td
                    key={column.key}
                    style={
                      toggles.checkboxes === false
                        ? { padding: "0.5rem 1rem" }
                        : {}
                    }
                  >
                    {column.format === "date" || column.format === "datetime"
                      ? formatDate(row[column.key])
                      : checkNull(mapReferenceValues(row[column.key]))}
                  </td>
                ))}
              </tr>
            ))}

            {paginatedData.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1}>
                  <div style={{ cursor: "default" }}>No data found.</div>
                </td>
              </tr>
            )}

            {toggles.newSubmission && (
              <tr style={{ borderTop: "2px solid rgb(125, 87, 46)" }}>
                <td
                  colSpan={columns.length + 1}
                  onClick={handleAddNewSubmission}
                >
                  <div>
                    <Plus
                      size={20}
                      style={{ marginRight: "5px", cursor: "pointer" }}
                    />
                    Add new record
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="actionsContainer">
        <div className="pagination-controls">
          <div className="pagination-buttons">
            <StandardButton
              buttonText=""
              Icon={ChevronLeft}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{ margin: "0 0.5rem" }}
            />
            <StandardButton
              buttonText=""
              Icon={ChevronRight}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{ margin: "0 0.5rem" }}
            />
          </div>
          <span>
            Page {currentPage} of {totalPages}
          </span>
        </div>

        {selectedRows.length > 0 && (
          <div className="actionButtons">
            {toggles.archive && (
              <StandardButton
                buttonText="Archive"
                onClick={handleArchiveSelected}
                Icon={Archive}
              />
            )}

            {toggles.unarchive && (
              <StandardButton
                buttonText="Unarchive"
                onClick={handleUnarchiveSelected}
                Icon={Unarchive}
              />
            )}

            {toggles.delete && (
              <StandardButton
                buttonText="Delete"
                onClick={() => setConfirmationOpen(true)}
                variant="critical"
                Icon={Trash2}
              />
            )}

            {toggles.edit && selectedRows.length === 1 && (
              <StandardButton
                buttonText="Edit"
                onClick={handleEditSelected}
                Icon={Pencil}
              />
            )}
          </div>
        )}
      </div>

      {editPanel && (
        <DarkBackgroundContainer style={{ alignItems: "flex-start" }}>
          <div>
            <CartoonyContainer
              style={{
                minHeight: "250px",
              }}
              handleClose={handleClose}
            >
              <Form
                sections={
                  editing ? removePasswordField(formFields) : formFields
                }
                disclaimerText={
                  editing
                    ? "Please fill out the form below to edit the selected record."
                    : "Please fill out the form below to add a new record."
                }
                formSubmit={editing ? editFormSubmit : createFormSubmit}
                defaultValues={
                  editing ? getValuesToEdit() : { defaultValues: {} }
                }
              />
            </CartoonyContainer>
          </div>
        </DarkBackgroundContainer>
      )}

      {confirmationOpen && (
        <ConfirmationPanel
          confirmationTitle="Are you sure you want to delete the selected records?"
          confirmationDescription={`You are about to delete ${selectedRows.length} records. This action cannot be undone.`}
          onConfirm={handleDeleteSelected}
          onCancel={() => setConfirmationOpen(false)}
          variant="critical"
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default DataTable;
