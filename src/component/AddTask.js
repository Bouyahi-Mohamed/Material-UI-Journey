import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function AddTask() {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" }, mt: 2 , display: 'flex', justifyContent: 'center', justifyItems: 'center'}}
      noValidate
      autoComplete="off"
    >
      <TextField sx={{ flex: 4 ,flexGrow: 4 }} id="outlined-basic" label="Add Task" variant="outlined"  color="danger"/>
      <Button sx={{ flex: 1 }} variant="contained" color="success">
        Add Task
      </Button>
    </Box>
  );
}
