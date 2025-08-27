import './App.css';
import TodoList from './component/TodoList';
import RootContainer from './component/RootContainer';
import Title from './component/Title';
import ListButton from './component/NavButton';
import AddTask from './component/AddTask';
function App() {
  return (
   <RootContainer>
    <Title />
    <ListButton />
    <TodoList />
    <AddTask />
   </RootContainer>
  );
}

export default App;
