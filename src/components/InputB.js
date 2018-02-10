import React from "react";

const InputB = props => {
    return (
        <input
            type="text"
            onChange={e => {
                props.onChange(e.target.value, "B");
            }}
            value={props.value}
        />
    );
};

export default InputB;