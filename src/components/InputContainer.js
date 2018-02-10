import React, { Component } from "react";
import Input from "./Input";
import { fToC, cToF } from "../utilities/convert";

class InputContainer extends Component {
    state = {
        value: 0,
        unitTracker: "",
    };
    handleInputF(value) {
        this.setState({
            value,
            unitTracker: 'F'
        });
    }

    handleInputC(value) {
        this.setState({
            value,
            unitTracker: 'C'
        });
    }

    render() {
        let valueForF;
        let valueForC;
       if(this.state.unitTracker === 'F'){
         valueForF = this.state.value;
         valueForC = fToC(valueForF);
       }
       if(this.state.unitTracker === 'C'){
         valueForC = this.state.value;
         valueForF = cToF(this.state.value);

       }

        return (
            <div className="inputContainer">
               <div>
                <Input
                    onChange={(value) => this.handleInputF(value)}
                    value={valueForF}
                /> Fahrenheit
                </div>
                <div>
                <Input
                    onChange={(value) => this.handleInputC(value)}
                    value={valueForC}
                /> Celsius
                </div>
            </div>
        );
    }
}

export default InputContainer;