import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Grid } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import CloseIcon from '@mui/icons-material/Close';
//import tasks data
import { TasksContext } from "../Data/Tasks";
import{ useContext } from "react";
import { NavBotsContext } from "../Data/Tasks";


// Use React state for cards
export default function TodoList() {
  const { tasks, setTasks } = useContext(TasksContext);
  const { navBots } = useContext(NavBotsContext);
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: "90%",
        display: "grid",
        gridTemplateAreas: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 2,
        alignContent: "center",
        margin: "0 auto",
      }}
    >
      <RenderTodoList tasks={tasks} navBots={navBots} selectedCard={selectedCard} setTasks={setTasks}/>
     

    </Box>
  );
}

// delete task button with dialog
export function DeleteBtn({ id }) {
  const { tasks, setTasks } = useContext(TasksContext);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton
        sx={{
          backgroundColor: "#ffffffff",
          color: "red",
          ":hover": { backgroundColor: "lightgray" },
        }}
        aria-label="delete"
        variant="outlined"
        onClick={handleClickOpen}
      >
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`do you want to delete this item? #${id}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={()=>{
            handleClose();
            // add delete logic here
            localStorage.setItem('tasks', JSON.stringify(tasks.filter((c) => c.id !== id)));
            setTasks((prev) => prev.filter((c) => c.id !== id));

          }}>Yes</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

// update task button with dialog

export  function EditBtn({ id }) {
  const [open, setOpen] = React.useState(false);
  const { tasks, setTasks } = useContext(TasksContext);
  const [editedTask, setEditedTask] = React.useState(tasks.find(t => t.id === id) || {title: '', description: '', state: false});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    console.log(email);
    handleClose();
  };

  return (
    <React.Fragment>
      <IconButton
        sx={{
          backgroundColor: "#ffffffff",
          color: "blue",
          ":hover": { backgroundColor: "lightgray" },
        }}
        aria-label="edit"
        onClick={handleClickOpen}
      >
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}
      sx={{width: 800}}>
        <DialogTitle>would you like to edit this item</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="title"
              name="title"
              label="title"
              type="text"
              fullWidth
              variant="standard"
              value={editedTask.title}
              onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
          
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="description"
              name="description"
              label="description"
              type="text"
              fullWidth
              variant="standard"
              value={editedTask.description}
              onChange={(e) => {setEditedTask({ ...editedTask, description: e.target.value });}}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="subscription-form" onClick={() => {
            localStorage.setItem('tasks', JSON.stringify(tasks.map((task) => (task.id === id ? editedTask : task))));
            setTasks((prev) => prev.map((task) => (task.id === id ? editedTask : task)));
            handleClose();
          }}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
  
// check button that defines that action done or undone
function CheckBtn({ id }) {
  const { tasks, setTasks } = useContext(TasksContext);
  const task = tasks.find((t) => t.id === id);
  if (!task) return null;

  return (
    <React.Fragment>
      <IconButton
        sx={{
          backgroundColor: "#ffffffff",
          color: task.state ? "red" : "green",
          ":hover": { backgroundColor: "lightgray" },
        }}
        aria-label={task.state ? "check" : "close"}
        onClick={() => {
          localStorage.setItem(
            "tasks",
            JSON.stringify(
              tasks.map((c) =>
                c.id === task.id ? { ...c, state: !c.state } : c
              )
            )
          );
          setTasks((prev) =>
            prev.map((c) =>
              c.id === task.id ? { ...c, state: !c.state } : c
            )
          );
        }}
      >
        {task.state ? <CloseIcon /> : <CheckIcon />}
      </IconButton>
    </React.Fragment>
  );
}

// function that renders the todo list depending on the selected filter
export function RenderTodoList({ tasks, navBots, selectedCard, setTasks }) {
  return (
    <React.Fragment>
      {tasks
        .filter((task) => {
          if (navBots === "undone") {
            return task.state === false;
          } else if (navBots === "done") {
            return task.state === true;
          }
          return true;
        })
        .map((task, index) => (
          <TodoCard  task={task} setTasks={setTasks} selectedCard={selectedCard} index={index}/>
        ))}
    </React.Fragment>
  );
}


// card component that will rendered
function TodoCard({ task, setTasks ,selectedCard,index}) {
  
  return (
    <React.Fragment>
       <Card key={task.id}>
          <CardActionArea
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              backgroundColor: task.state ? 'green' : "#4994bcff",
              padding: task.state ? "8px 0 " : "0",
            }}
          >
            <CardContent sx={{ height: "100%", color: "#ffffffff" }}>
              <Grid container spacing={2}>
                <Grid item size={8}>
                  <Typography variant="h5" component="h1">
                    {task.title}
                  </Typography>
                  <Typography variant="body2" color="text.white">
                    {task.description}
                  </Typography>
                </Grid>
                <Grid item size={4}>
                  <Stack direction="row" spacing={1}>
                    <DeleteBtn id={task.id} />
                    <EditBtn id={task.id} />
                    <CheckBtn id={task.id} />
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>

      </React.Fragment>

  )
}