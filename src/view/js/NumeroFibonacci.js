class NumeroFibonacci {
  terminoAnterior = 0;
  terminoActual = 0;
  numeroVecesActualizador = 0;
  valor = 0;
  binario = 2;
  hexadecimal = 16;

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
    if (this.numeroVecesActualizador!=0) {
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
}
