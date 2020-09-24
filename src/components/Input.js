import React from 'react';

const Input = (props) => {
    return (
        <div className="md:text-sm xl:text-base flex-1">
            <label
                className="font-sm mb-2 font-bold text-blue-600"
                htmlFor={props.label}> {props.label} </label>
            <input
                readOnly={props.readOnly}
                id={props.label}
                className="w-full py-2 px-4 bg-gray-200 rounded-md"
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default Input;