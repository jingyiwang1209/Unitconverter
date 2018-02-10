import React from "react";

const renderOptions = values => {
    return values.map(value => {
        return <option key={value} value={value}>{value}</option>;
    });
};

const SelectPanel = props => {
    const values = props.values;
    return (
        <select name="text" className="select-panel"
            onChange={(e)=>{
                props.onChange(e.target.value)}}
        >
            {renderOptions(values)}
        </select>
    );
};

export default SelectPanel;