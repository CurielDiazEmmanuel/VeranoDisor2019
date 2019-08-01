class NumeroFibonacci {
  terminoAnterior = 0;
  terminoActual = 0;
  numeroVecesActualizador = 0;
  valor = 0;
  binario = 2;
  hexadecimal = 16;
  contador = 0;
  lista;
  getValor() {
    return this.valor;
  }

  avanzar() {
    this.numeroVecesActualizador += 1;
    if (this.numeroVecesActualizador == 0) {
      this.terminoActual = 1;
    }
    if (this.numeroVecesActualizador == 1) {
      this.terminoActual = 1;
    }
    if (this.numeroVecesActualizador >= 2) {
      const respaldoTerminoAnterior = this.terminoAnterior;
      this.terminoAnterior = this.terminoActual;
      this.terminoActual = this.terminoAnterior + respaldoTerminoAnterior;
    }
    this.valor = this.terminoActual;
  }

  retroceder() {
    if (this.numeroVecesActualizador != 0) {
      this.numeroVecesActualizador -= 1;
    }
    if (this.numeroVecesActualizador == 0) {
      this.terminoActual = 0;
    }
    if (this.numeroVecesActualizador == 1) {
      this.terminoActual = 1;
    }
    if (this.numeroVecesActualizador >= 2) {
      const respaldoTerminoSiguiente = this.terminoActual;
      this.terminoActual = this.terminoAnterior;
      this.terminoAnterior = respaldoTerminoSiguiente - this.terminoActual;
    }
    this.valor = this.terminoActual;
  }

  reiniciar() {
    this.terminoAnterior = 0;
    this.terminoActual = 0;
    this.numeroVecesActualizador = 0;
    this.valor = 0;
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
        this.lista = new Array();
        var numero = n.toString();

        for (var i = 0; i < numero.Length; i++) {
          var a = numero[i].toString();
          var number = a;
          this.lista.push(number);
        }

        var suma = 0;
        for (var i = 0; i < this.lista.Length; i++) {
          var elevar = this.lista[i] * this.lista[i];

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
