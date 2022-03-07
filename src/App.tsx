import React from 'react';
import { AddTodo } from './components/AddTodo';
import { Todos } from './containers/Todos';
import TodoProvider from './context/todoContext';
import './styles.css';

function App() {
  return (
    <TodoProvider>
      <main className="app">
        <h1>My Todos</h1>
        <AddTodo />
        <Todos />
      </main>
    </TodoProvider>
  );
}

export default App;
