import React from 'react'

export const Small = React.memo(({ value }) => {
    console.log('Componente renderizado');

    return (
        <small>
            {value}
        </small>
    )
});
