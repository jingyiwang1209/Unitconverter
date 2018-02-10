// Fahrenheit to Celsius

export const fToC = (value)=>{
    return Math.round(((value - 32) * 5 / 9) * 100) / 100;
};

// Celsius to Fahrenheit
export const cToF = (value)=>{
    return Math.round((value * 9 / 5 + 32) * 100) / 100;
}