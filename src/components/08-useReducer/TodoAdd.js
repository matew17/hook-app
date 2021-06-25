import React from 'react'
import PropTypes from 'prop-types'

import { useForm } from '../../hooks/useForm';


export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, resetForm] = useForm({ description: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description?.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);
        resetForm();
    };

    return (
        <>
            <h4>Agregar ToDO</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    type="text"
                    name="description"
                    placeholder="Agregar ToDO"
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}

TodoAdd.propTypes = {
    handleAddTodo: PropTypes.func.isRequired
};
