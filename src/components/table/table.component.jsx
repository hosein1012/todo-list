import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";

import { setTasks } from "../../store/tasks/tasks.action";
import { selectTasks } from "../../store/tasks/tasks.selector";
import { getTasks } from "../../utils/firebase/firebase.utils";

import TableItem from "../table-item/table-item.component";

import { Span } from "./table.styles";

import { deleteTaskFromDb } from "../../utils/firebase/firebase.utils";
import { removeTaskFromState } from "../../store/tasks/tasks.action";

const TaskTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getTasksList = async () => {
      const tasksList = await getTasks();
      dispatch(setTasks(tasksList));
    };
    getTasksList();
  }, []);

  const tasks = useSelector(selectTasks);

  const deleteSelectedTasksHandler = () => {
    for (const task of tasks) {
      if (task.selected === true) {
        deleteTaskFromDb(task.id);
        dispatch(removeTaskFromState(task.id));
      }
    }
  };
  return (
    <>
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
            {tasks.length ? (
              tasks.map((tableItem, idx) => (
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
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={deleteSelectedTasksHandler}
      >
        Delete Selected
      </Button>
    </>
  );
};

export default TaskTable;
