import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Practice UI</h1>
      <Button variant="contained"><AccountCircleIcon /> Profile</Button>
    </div>
  );
}

export default App;
