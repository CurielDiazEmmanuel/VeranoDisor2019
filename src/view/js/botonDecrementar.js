var Boton = (function(){
  objFibo = new NumeroFibonacci();
     var retrocede = function(){
      var decre = document.getElementById("decrementar");
      var decimal = objFibo.getValor();
      var inputDecimal = document.getElementById("decimal");
      if (decimal == 0) {
        decre.disabled = true;
      } else {
        objFibo.retroceder();
        var decimal1 = objFibo.getValor();
        inputDecimal.setAttribute("value", decimal1);
        var binario = objFibo.getValorBinario();
        var inputBinario = document.getElementById("binario");
        inputBinario.setAttribute("value", binario);
        var hexadecimal = objFibo.getValorHexadecimal();
        var inputHexadecimal = document.getElementById("hexadecimal");
        inputHexadecimal.setAttribute("value", hexadecimal);
        if (decimal1 == 0) {
          decre.disabled = true;
        }
      }
     };
     var avance = function() {
      var decre = document.getElementById("decrementar");
      decre.disabled=false;
       objFibo.avanzar();
       var decimal = objFibo.getValor();
       var inputDecimal = document.getElementById("decimal");
       inputDecimal.setAttribute("value", decimal);
       var binario = objFibo.getValorBinario();
       var inputBinario = document.getElementById("binario");
       inputBinario.setAttribute("value", binario);
 
       var hexadecimal = objFibo.getValorHexadecimal();
       var inputHexadecimal = document.getElementById("hexadecimal");
       inputHexadecimal.setAttribute("value", hexadecimal); 
     };
     return{
         "retrocede":retrocede,
         "avance":avance
     };


}());