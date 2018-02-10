// Fahrenheit to Celsius

export const fToC = (value)=>{
    return value === '' ? '' : Math.round(((value - 32) * 5 / 9) * 100) / 100;
};

// Celsius to Fahrenheit
export const cToF = (value)=>{
    return value === '' ? '' : Math.round((value * 9 / 5 + 32) * 100) / 100;
};

export const inchToCm = (value)=>{
    return value === '' ? '' : Math.round((value * 2.54) * 100) / 100;
};

export const cmToInch = (value)=>{
    return value === '' ? '' : Math.round((value / 2.54) * 100) / 100;
};

export const verifyInputData = (value)=>{
    value = parseFloat(value);
    if(Number.isNaN(value)){
        return "";
    }
    return value;
}

export const showValues = (sourceUnit, targetUnit, marker, value, sourceValue, targetValue)=>{
     if (marker == "source") {
            if (sourceUnit === "Fahrenheit" && targetUnit === "Celsius") {
                sourceValue = value;
                targetValue = fToC(value);
            } else if (sourceUnit === "inches" && targetUnit === "cm") {
                sourceValue = value;
                targetValue = inchToCm(value);
            } else {
                sourceValue = "Invalid unit pair.";
                targetValue = "";
            }
        }

        if (marker == "target") {

            if (sourceUnit === "Fahrenheit" && targetUnit === "Celsius") {
                targetValue = value;
                sourceValue = cToF(value);
            } else if (sourceUnit === "inches" && targetUnit === "cm") {
                targetValue = value;
                sourceValue = cmToInch(value);
            } else {
                targetValue = "Invalid unit pair.";
                sourceValue = "";
            }
        }
        return {
            sourceValue,
            targetValue
        };
}