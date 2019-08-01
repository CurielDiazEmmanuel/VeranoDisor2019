class ListaSuerte {
    lista;
    constructor() {
        this.lista = new Array();
    }

    sucesion(limite) {
        for (var i = 0; i < limite; i++) {
            if (i % 2 == 0)
                this.lista.push(i + 1);
        }
        var pivote = 1;
        do {

            this.elimina_Multiplos_De(this.lista[pivote]);
            pivote++;

        } while (this.lista[pivote] <= this.lista.length);

    }

    elimina_Multiplos_De(p) {
        for (var i = 0; i < this.lista.length; i++) {

            if ((i + 1) % p == 0) {

                this.lista[i] = 0;
            }
        }

        this.lista.sort(this.comparar);
        this.lista.splice(0, this.lista.length / p);
    }


    comparar(a, b) { return a - b; }
    obtener_lista() {
        this.sucesion(10000);
        return this.lista;
    }


}