import './App.css';
import TodoList from './component/TodoList';
import RootContainer from './component/RootContainer';
import Title from './component/Title';
import ListButton from './component/NavButton';
import AddTask from './component/AddTask';
import {TasksContext,NavBotsContext} from './Data/Tasks';
import { useState } from 'react';
function App() {
  const [navBots, setNavBots] = useState('all');
  const [tasks, setTasks] = useState([
    { id: 1, title: "do gym", description: "I have to do back", state: true },
    { id: 2, title: "feed my Animals", description: "Animals are a part of nature.", state: true },
    { id: 3, title: "call my family", description: "Humans  depend on plants and animals for survival.", state: false },
  ]);
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
