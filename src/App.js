import './App.css';
import TodoList from './component/TodoList';
import RootContainer from './component/RootContainer';
import Title from './component/Title';
import ListButton from './component/NavButton';
import AddTask from './component/AddTask';
import {TasksContext,NavBotsContext} from './Data/Tasks';
import { useState } from 'react';
const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
const navbarStorage = JSON.parse(localStorage.getItem('navbar')) || 'all';
function App() {
  const [navBots, setNavBots] = useState(navbarStorage);
  const [tasks, setTasks] = useState(storedTasks);
  return (
    <NavBotsContext.Provider value={{navBots, setNavBots}}>
    <TasksContext.Provider value={{tasks, setTasks}}>
      <RootContainer>
        <Title />
        <ListButton />
        <TodoList />
        <AddTask />
      </RootContainer>
    </TasksContext.Provider>
  </NavBotsContext.Provider>
  );
} 

export default App;
