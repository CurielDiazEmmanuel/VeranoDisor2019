
objUla = new NumeroUlam();

function avanzarUlam() {
    objUla.avanzar();
    var decimal = objUla.getValor();
    var inputDecimal = document.getElementById("decimalUlam");
    inputDecimal.setAttribute("value", decimal);
    var binario = objUla.getValorBinario();
    var inputBinario = document.getElementById("binarioUlam");
    inputBinario.setAttribute("value", binario);
    var hexadecimal = objUla.getValorHexadecimal();
    var inputHexadecimal = document.getElementById("hexadecimalUlam");
    inputHexadecimal.setAttribute("value", hexadecimal);
    var feliz = objUla.feliz(decimal);
    if (feliz) {
        document.getElementById("felizU").innerHTML = 'Feliz: Si';
    } else {
        document.getElementById("felizU").innerHTML = 'Feliz: No';
    }
    var capicua = objUla.Capicua(decimal);
    if (capicua) {
        document.getElementById("capicuaU").innerHTML = 'Capicua: Si';
    } else {
        document.getElementById("capicuaU").innerHTML = 'Capicua: No';
    }
};
