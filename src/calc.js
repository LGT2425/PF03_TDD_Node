function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        throw new RangeError("No se puede dividir entre cero");
    }
    return a / b;
}

export { suma, resta, multiplicacion, division };