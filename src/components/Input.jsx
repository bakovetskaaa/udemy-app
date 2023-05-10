import React from 'react';

function Input(props)  {
    return (
        <div>
            <input type={props.name} placeholder={props.placeholder} />
        </div>
    );
};

export default Input;