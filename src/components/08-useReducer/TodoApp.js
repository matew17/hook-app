import React, { useEffect, useReducer } from 'react'

import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';

const init = () => (
    JSON.parse(localStorage.getItem('todos')) || []
);

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDelete = (todoID) => {
        const action = {
            type: 'delete',
            payload: todoID
        };

        dispatch(action);
    };

    const handleToggle = (todoID) => {
        dispatch({
            type: 'toggle',
            payload: todoID
        });
    };

    const handleAddTodo = (todo) => {
        dispatch({
            type: 'add',
            payload: todo
        });
    };

    return (
        <div>
            <h1>ToDO App ({todos.length})</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                </div>

                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
};
