import React from "react";

const UserInput = props => {
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

export default UserInput;