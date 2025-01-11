import React from "react";
import {
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// Dummy data for Form Submissions
const formSubmissions = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    message: "Interested in joining.",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    message: "Looking forward to volunteering.",
  },
  {
    id: 3,
    name: "Sam Wilson",
    email: "sam@example.com",
    message: "Would like more information.",
  },
];

const AdminSubmissionsPage = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Form Submissions
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formSubmissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell>{submission.name}</TableCell>
                <TableCell>{submission.email}</TableCell>
                <TableCell>{submission.message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminSubmissionsPage;
