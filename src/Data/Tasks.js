import { createContext , useContext} from "react";
const tasks = [
  {
    id: 1,
    title: "do gym",
    description: "I have to do back",
    state: true
  },
  {
    id: 2,
    title: "feed my Animals",
    description: "Animals are a part of nature.",
    state: true
  },
  {
    id: 3,
    title: "call my family",
    description: "Humans depend on plants and animals for survival.",
    state: false
  },
];

const TasksContext = createContext({ tasks: [], setTasks: () => {} });
const NavBotsContext = createContext({ navBots: 'all', setNavBots: () => {} });
export { TasksContext, tasks, NavBotsContext };
