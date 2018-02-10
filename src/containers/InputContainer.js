import React, { Component } from "react";
import UserInput from "../components/UserInput";
import { verifyInputData, showValues } from "../utilities/utility";
import SelectPanel from "../components/SelectPanel";

class InputContainer extends Component {
    state = {
        value: "",
        sourceUnit: "Fahrenheit",
        targetUnit: "Celsius",
        marker: ""
    };
    handleInputSource(value) {
        this.setState({
            value:verifyInputData(value),
            marker: "source"
        });
    }

    handleInputTarget(value) {
        this.setState({
            value:verifyInputData(value),
            marker: "target"
        });
    }
    handleSelectSource(value) {
        this.setState({
            sourceUnit: value
        });
    }

    handleSelectTarget(value) {
        this.setState({
            targetUnit: value
        });
    }

    render() {
        let sourceValue;
        let targetValue;
        const { sourceUnit, targetUnit, marker, value } = this.state;
        let valueObj = showValues(sourceUnit, targetUnit, marker, value, sourceValue, targetValue)
        sourceValue = valueObj.sourceValue;
        targetValue = valueObj.targetValue;


        return (
            <div className="inputContainer">
                <div>
                    <UserInput
                        onChange={value => this.handleInputSource(value)}
                        value={sourceValue}
                    />
                    <SelectPanel
                        values={["Fahrenheit", "inches"]}
                        onChange={value => {
                            this.handleSelectSource(value);
                        }}
                    />
                </div>
                <div>
                    <UserInput
                        onChange={value => this.handleInputTarget(value)}
                        value={targetValue}
                    />
                    <SelectPanel
                        values={["Celsius", "cm"]}
                        onChange={value => {
                            this.handleSelectTarget(value);
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default InputContainer;