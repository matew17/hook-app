import React, { useEffect, useState } from 'react'
import { Message } from './Message';

import './effects.css'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log('Hey');
    }, []);

    useEffect(() => {
        // console.log('formState cambio');
    }, [formState]);

    useEffect(() => {
        // console.log('email cambio');
    }, [email]);

    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }


    return (
        <>
            <h1>Simple form</h1>
            <hr />

            <div className="form-group">
                <input
                    type="string"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="string"
                    name="email"
                    className="form-control"
                    placeholder="email@tumail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {(name === '123') && <Message />}
        </>
    )
}
