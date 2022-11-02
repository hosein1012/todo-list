import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import CloudDoneIcon from "@mui/icons-material/CloudDone";

const doneHandlerClick = () => {};

const removeHandlerClick = () => {};

const TableItem = (props) => {
  const { tableItem, rowNumber } = props;
  const { id, name } = tableItem;
  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox />
      </TableCell>
      <TableCell>{rowNumber}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>
        <IconButton color="success">
          <CloudDoneIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton aria-label="delete" size="large" color="error">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
