class NumeroUlam {
    posicion = 0;
    valor = 0;
    lista;
    binario = 2;
    hexadecimal = 16;
    contador = 0;
    lista2;
    objlista = new listaUlam();

    constructor() {
        this.lista = new Array();
        this.lista = this.objlista.obtener_lista();
    }
    lista(){

    }

    getValor() {
        return this.valor;
    }

    avanzar() {
        this.posicion += 1;
        this.valor = this.lista[this.posicion];
    }

    retroceder() {
        this.posicion -= 1;
        this.valor = this.lista[this.posicion];
    }

    reiniciar() {

    }

    imprimir() {
        for (var i = 0; i < this.lista.length; i++) {
            console.log(this.lista[i]);
        }
    }

    getValorBinario() {
        return this.valor.toString(this.binario);
    }

    getValorHexadecimal() {
        return this.valor.toString(this.hexadecimal);
    }

    
  feliz(n) {
    if (n == 1) {
      return true;
    }
    else {

      if (this.contador < 20) {
        this.lista2 = new Array();
        var numero = n.toString();

        for (var i = 0; i < numero.Length; i++) {
          var a = numero[i].toString();
          var number = a;
          this.lista2.push(number);
        }

        var suma = 0;
        for (var i = 0; i < this.lista2.Length; i++) {
          var elevar = this.lista2[i] * this.lista2[i];

          suma = suma + elevar;

        }
        this.contador++;

        return this.feliz(suma);
      }
      else { return false; }
    }


  }

  Capicua(numero) {
    var numeroCadena="";
     numeroCadena = numero.toString();
    var NumeroInvertido="";
    for (var i = numeroCadena.length - 1; i >= 0; i--) {
      NumeroInvertido+=numeroCadena.substr(i, 1);
    }
    return numeroCadena === NumeroInvertido;
  }
}
