objpado = new NumeroPadovan();

function avanzarPadovan() {  
    objpado.avanzar();
    var decimal = objpado.getValor();
    var inputDecimal = document.getElementById("decimalPado");
    inputDecimal.setAttribute("value", decimal);
    var binario = objpado.getValorBinario();
    var inputBinario = document.getElementById("binarioPado");
    inputBinario.setAttribute("value", binario);
    var hexadecimal = objpado.getValorHexadecimal();
    var inputHexadecimal = document.getElementById("hexadecimalPado");
    inputHexadecimal.setAttribute("value", hexadecimal);
    var feliz = objpado.feliz(decimal);
    if (feliz) {
        document.getElementById("felizP").innerHTML = 'Feliz: Si';
    } else {
        document.getElementById("felizP").innerHTML = 'Feliz: No';
    }
    var capicua = objpado.Capicua(decimal);
    if (capicua) {
        document.getElementById("capicuaP").innerHTML = 'Capicua: Si';
    } else {
        document.getElementById("capicuaP").innerHTML = 'Capicua: No';
    }
}
