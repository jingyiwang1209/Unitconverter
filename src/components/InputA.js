import React from "react";

const InputA = props => {
    return (
        <input
            type="text"
            onChange={e => {
                props.onChange(e.target.value, "A");
            }}
            value={props.value}
        />
    );
};

export default InputA;