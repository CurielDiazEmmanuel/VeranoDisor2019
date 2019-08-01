
objSue = new NumeroSuerte();

function avanzarSue() {
    objSue.avanzar();
    var decimal = objSue.getValor();
    var inputDecimal = document.getElementById("decimalSuerte");
    inputDecimal.setAttribute("value", decimal);
    var binario = objSue.getValorBinario();
    var inputBinario = document.getElementById("binarioSuerte");
    inputBinario.setAttribute("value", binario);
    var hexadecimal = objSue.getValorHexadecimal();
    var inputHexadecimal = document.getElementById("hexadecimalSuerte");
    inputHexadecimal.setAttribute("value", hexadecimal);
    var feliz = objSue.feliz(decimal);
    if (feliz) {
        document.getElementById("felizS").innerHTML = 'Feliz: Si';
    } else {
        document.getElementById("felizS").innerHTML = 'Feliz: No';
    }
    var capicua = objSue.Capicua(decimal);
    if (capicua) {
        document.getElementById("capicuaS").innerHTML = 'Capicua: Si';
    } else {
        document.getElementById("capicuaS").innerHTML = 'Capicua: No';
    }
};
