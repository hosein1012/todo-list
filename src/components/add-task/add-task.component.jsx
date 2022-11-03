import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useDispatch } from "react-redux";

import { addTaskToDb } from "../../utils/firebase/firebase.utils";
import { addTaskToState } from "../../store/tasks/tasks.action";

const INITIAL_STATE = {
  name: "",
};

const AddTask = () => {
  const [formFields, setFormFields] = useState(INITIAL_STATE);
  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { name } = formFields;
    const task = {
      name,
      status: false,
    };
    const taskId = await addTaskToDb(task);
    task.id = taskId;
    dispatch(addTaskToState(task));
    resetHandler();
  };

  const resetHandler = () => {
    setFormFields(INITIAL_STATE);
  };

  const textFieldHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Box
      component="form"
      sx={{
        border: "2px black dashed",
        padding: "20px",
        margin: "2rem 0",
        display: "flex",
      }}
      noValidate
      autoComplete="off"
      onSubmit={onSubmitHandler}
    >
      <TextField
        fullWidth
        id="outlined-basic"
        label="Task Title"
        variant="outlined"
        size="small"
        sx={{ margin: "5px" }}
        value={formFields.name}
        name="name"
        onChange={textFieldHandler}
      />
      <Button
        variant="contained"
        sx={{ marginLeft: "15px", height: "2.5rem", width: "20rem" }}
        type="submit"
      >
        Add Task
      </Button>
    </Box>
  );
};

export default AddTask;
