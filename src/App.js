import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { FaRegHandshake } from 'react-icons/fa';

function App () {
  return (
    <div className="todo-app">
        <a href="https://korenw.netlify.app/">
           <FaRegHandshake />
        </a>
        <h1>Todo app</h1>
        <TodoList />
    </div>
  );
}

export default App;