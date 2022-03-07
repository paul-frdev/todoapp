import React, { useContext } from 'react'
import { ITodo, TodoContextType } from '../@types/todo'
import { Todo } from '../components/Todo';
import { TodoContext } from '../context/todoContext'

export const Todos = () => {
    const { todos, updateTodo } = useContext(TodoContext) as TodoContextType;

    return (
        <>
            {todos.map((todo: ITodo) => (
                <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
            ))}
        </>
    )
}
