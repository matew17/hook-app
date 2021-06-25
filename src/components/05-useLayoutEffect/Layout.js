import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

export const Layout = () => {
    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});
    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Layout effect</h1>
            <hr />

            <blockquote className="blockquote text-end">
                <p
                    ref={pTag}
                    className="mb-o">
                    {quote}
                </p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 4)}
            </pre>

            <button
                onClick={() => increment(1)}
                className="btn btn-primary">
                Siguiente quote
            </button>

        </div>
    )
}
