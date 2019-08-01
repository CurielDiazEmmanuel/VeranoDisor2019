objFibo = new NumeroFibonacci();
objPado = new NumeroPadovan();
objSue = new NumeroSuerte();
objUla = new NumeroUlam();

function avanzarFibo() {
    objFibo.avanzar();
    var decimal = objFibo.getValor();
    var inputDecimal = document.getElementById("decimalFibo");
    inputDecimal.setAttribute("value", decimal);
    var binario = objFibo.getValorBinario();
    var inputBinario = document.getElementById("binarioFibo");
    inputBinario.setAttribute("value", binario);
    var hexadecimal = objFibo.getValorHexadecimal();
    var inputHexadecimal = document.getElementById("hexadecimalFibo");
    inputHexadecimal.setAttribute("value", hexadecimal);
    var feliz = objFibo.feliz(decimal);
    if (feliz) {
        document.getElementById("felizFibo").innerHTML = 'Feliz: Si';
    } else {
        document.getElementById("felizFibo").innerHTML = 'Feliz: No';
    }
    var capicua = objFibo.Capicua(decimal);
    if (capicua) {
        document.getElementById("capiFibo").innerHTML = 'Capicua: Si';
    } else {
        document.getElementById("capiFibo").innerHTML = 'Capicua: No';
    }
};

