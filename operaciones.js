function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2
}

function dividir(numero1, numero2) {
    if (numero2 != 0) {
        return numero1 / numero2;
    }
    else {
        alert("División indeterminada...\nEl dividendo debe ser diferente de 0");
        return "Error"
    }
}

function ingresarNumero(numero) {
    const numero1 = document.getElementById("numero1");
    const numero2 = document.getElementById("numero2");
    const operador = document.getElementById("operacion").value;
    if (operador === "") {
        numero1.value = numero1.value + numero;
    }
    else {
        numero2.value = numero2.value + numero;
    }
}

function ingresarOperaciones(operador) {
    const campoOperador = document.getElementById("operacion");
    campoOperador.value = operador
}

function ejecutarOperaciones() {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);
    const operador = document.getElementById("operacion").value;
    let resultado = 0
    if (operador === "") {
        resultado = sumar(numero1, numero2);
    }
    else {
        switch (operador) {
            case "+": resultado = sumar(numero1, numero2);
                break;
            case "-": resultado = restar(numero1, numero2);
                break;
            case "*": resultado = multiplicar(numero1, numero2);
                break;
            case "/": resultado = dividir(numero1, numero2);
                break;
        }
    }

    console.log({ operador, numero1, numero2, resultado });
    const campoResultado = document.getElementById("txtResultado");
    campoResultado.value = "El resultado es = " + resultado;
    alert("El resultado es = " + resultado);
}

function limpiarCampos() {
    const campoNumero1 = document.getElementById("numero1");
    const campoNumero2 = document.getElementById("numero2");
    const campoOperador = document.getElementById("operacion");
    const campoResultado = document.getElementById("txtResultado");
    campoNumero1.value = "";
    campoNumero2.value = "";
    campoOperador.value = "";
    campoResultado.value = "";
}