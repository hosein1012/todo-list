import { useDispatch } from "react-redux";

import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import CloudDoneIcon from "@mui/icons-material/CloudDone";

import { deleteTaskFromDb } from "../../utils/firebase/firebase.utils";
import { removeTaskFromState } from "../../store/tasks/tasks.action";

import { markTaskAsDoneInDb } from "../../utils/firebase/firebase.utils";
import { MarkTaskAsDoneInState } from "../../store/tasks/tasks.action";

import { markTaskAsSelectedInState } from "../../store/tasks/tasks.action";

const TableItem = (props) => {
  const { tableItem, rowNumber } = props;
  const { id, name, status, selected } = tableItem;

  const dispatch = useDispatch();

  const removeHandlerClick = () => {
    deleteTaskFromDb(id);
    dispatch(removeTaskFromState(id));
  };

  const doneHandlerClick = () => {
    markTaskAsDoneInDb(id);
    dispatch(MarkTaskAsDoneInState(id));
  };

  const markTaskHandler = () => {
    dispatch(markTaskAsSelectedInState(id, !selected));
  };

  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox onChange={markTaskHandler} />
      </TableCell>
      <TableCell>{rowNumber}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>
        <IconButton
          color="success"
          disabled={status}
          onClick={doneHandlerClick}
        >
          <CloudDoneIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton
          aria-label="delete"
          size="large"
          color="error"
          onClick={removeHandlerClick}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
