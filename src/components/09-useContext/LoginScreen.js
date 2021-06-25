import React, { useContext } from 'react'

import { UserContext } from './UserContext'

export const LoginScreen = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 4)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={() => setUser({ id: 123, name: 'Mateo', lastname: 'Castaño' })}
            >
                Login
            </button>
        </div>
    )
}
