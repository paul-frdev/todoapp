import { createContext, ReactNode, useState } from 'react';
import { TodoContextType, ITodo } from '../@types/todo';

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<ReactNode> = ({ children }) => {
    const [todos, setTodos] = useState<ITodo[]>([
        {
            id: 1,
            title: 'post one',
            description: 'this is something',
            status: false
        },
        {
            id: 2,
            title: 'post two',
            description: 'this is something',
            status: true,
        },
    ]);

    const saveTodo = (todo: ITodo) => {
        const newTodo: ITodo = {
            id: Math.random(),
            title: todo.title,
            description: todo.description,
            status: false
        }

        setTodos([...todos, newTodo])
    }

    const updateTodo = (id: number) => {
        todos.filter((todo: ITodo) => {
            if (todo.id === id) {
                todo.status = true
                setTodos([...todos])
            }
        })
    }

    return (
        <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;