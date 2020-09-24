import React from 'react';

const Button = (props) => {
    return (
        <button
            onClick={props.onClick}
            className="uppercase py-2 px-6 rounded-md bg-blue-600 hover:bg-blue-700 font-bold text-white ml-4"
        >
            {props.children}
        </button>
    );
};

export default Button;