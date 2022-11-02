import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddTask = () => {
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
    >
      <TextField
        fullWidth
        id="outlined-basic"
        label="Task Title"
        variant="outlined"
        size="small"
        margin="5px"
      />
      <Button
        variant="contained"
        sx={{ marginLeft: "15px", height: "2.5rem", width: "20rem" }}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default AddTask;
