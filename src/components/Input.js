import React from "react";

const Input = props => {
    return (
        <input
            type="text"
            onChange={e => {
                props.onChange(e.target.value);
            }}
            value={props.value}
        />
    );
};

export default Input;