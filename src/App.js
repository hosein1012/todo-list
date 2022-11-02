import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import TaskTable from "./components/table/table.component";
import AddTask from "./components/add-task/add-task.component";

function App(props) {
  return (
    <Container sx={{ marginTop: "20px" }}>
      <Stack spacing={3}>
        <AddTask />
        <TaskTable />
      </Stack>
    </Container>
  );
}

export default App;
