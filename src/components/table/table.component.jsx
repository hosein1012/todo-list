import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import TableItem from "../table-item/table-item.component";

import { Span } from "./table.styles";

const tableItems = [
  // { name: "sleep", id: 1 },
  // { name: "eat", id: 2 },
  // { name: "study", id: 3 },
];
const TaskTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="task table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox"></TableCell>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Done</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableItems.length ? (
            tableItems.map((tableItem, idx) => (
              <TableItem
                key={tableItem.id}
                tableItem={tableItem}
                rowNumber={idx + 1}
              />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <Span>Don't You Have ANYTHING To Do?!</Span>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
