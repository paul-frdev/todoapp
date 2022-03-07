import React from 'react'
import { ITodo } from '../@types/todo'


type Props = {
    todo: ITodo;
    updateTodo: (id: number) => void;
}

export const Todo: React.FC<Props> = ({ todo, updateTodo }) => {

    const checkTodo: string = todo.status ? `line-through` : '';


    return (
        <div className='card'>
            <div className='card-text'>
                <h1 className={checkTodo}>{todo.title}</h1>
                <p className={checkTodo}>{todo.description}</p>
            </div>
            <button onClick={() => updateTodo(todo.id)} className={todo.status ? `hide-button` : 'card-button'}>Complete</button>
        </div>
    )
}
