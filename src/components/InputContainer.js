import React, { Component } from "react";
import InputA from "./InputA";
import InputB from "./InputB";
import { fToC, cToF } from "../utilities/convert";

class InputContainer extends Component {
    state = {
        value: 0,
        inputNameTracker: "",
        buttonClickTrackerForA: "",
        buttonClickTrackerForB:"",
    };
    handleInput(value, name) {
        this.setState({
            value,
            inputNameTracker: name
        });
    }

    render() {
        let valueForA;
        let valueForB;
        if (this.state.inputNameTracker === "A") {
            valueForA = this.state.value;
            valueForB = fToC(valueForA);
        } else if (this.state.inputNameTracker === "B") {
            valueForB = this.state.value;
            valueForA = cToF(valueForB);
        }
        return (
            <div className="inputContainer">
               <div>
                <InputA
                    onChange={(value, name) => this.handleInput(value, name)}
                    value={valueForA}
                /> Fahrenheit
                </div>
                <div>
                <InputB
                    onChange={(value, name) => this.handleInput(value, name)}
                    value={valueForB}
                /> Celsius
                </div>
            </div>
        );
    }
}

export default InputContainer;