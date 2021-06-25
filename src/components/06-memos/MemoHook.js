import React, { useMemo, useState } from 'react'

import { useCounter } from './../../hooks/useCounter';
import { procesoPesado } from './../../helpers/procesoPesado';

import '../02-useEffect/effects.css';

export const MemoHook = () => {
    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>Counter: {counter} </h1>
            <hr />

            <p>{memoProcesoPesado}</p>

            <button
                className="btn btn-primary"
                onClick={() => increment(1)}
            >
                +1
            </button>

            <button
                className="btn btn-outline-secondary ml-3"
                onClick={() => setShow(!show)}
            >
                Show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
