import React, { FormEvent, useContext, useState } from 'react'
import { ITodo, TodoContextType } from '../@types/todo'
import { TodoContext } from '../context/todoContext'

export const AddTodo: React.FC = () => {
    const { saveTodo } = useContext(TodoContext) as TodoContextType;
    const [formData, setFormData] = useState<ITodo | {}>();

    const handleForm = (e: FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value
        });
    }

    const handleSaveTodo = (e: FormEvent, formData: ITodo | any) => {
        e.preventDefault();

        saveTodo(formData);
    }
    return (
        <form className='form' onSubmit={(e) => handleSaveTodo(e, formData)}>
            <div className='form-container'>
                <div className='form-container__input'>
                    <label htmlFor="name">Title</label>
                    <input type="text" id='title' onChange={handleForm} />
                </div>
                <div className='form-container__input'>
                    <label htmlFor="description">Description</label>
                    <input type="text" id='description' onChange={handleForm} />
                </div>
            </div>
            <button className='form-container__btn' disabled={formData === undefined ? true : false}>Add Todo</button>
        </form>
    )
}
