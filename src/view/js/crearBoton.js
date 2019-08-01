var crearBoton = (function () {
      var crear = function () {
            var padre = document.getElementById("divInicial");
            var input = document.createElement("INPUT");
            input.type = 'text';
            padre.appendChild(input);
      };
      return {
            "crear": crear
      };
}());