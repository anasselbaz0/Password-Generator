import React from 'react';
import Switch from "react-switch";

const InputSwitch = (props) => {
    return (
        <div className="md:text-sm xl:text-base flex justify-between items-center">
            <label
                className="font-sm mb-2 font-bold text-blue-600"
                htmlFor={props.label}> {props.label}
            </label>
            <Switch
                id={props.label}
                onChange={props.onChange}
                checked={props.checked}
            />
        </div>
    );
};

export default InputSwitch;