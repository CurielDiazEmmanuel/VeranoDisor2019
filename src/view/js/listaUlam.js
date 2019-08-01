class listaUlam {
    lista;

    constructor() {
        this.lista = new Array();
        this.lista.push(1);
        this.lista.push(2);
    }

    succesion(limite) {
        for (var k = 3; k <= limite; k++) {
            if (!this.muyRepetido(k)) {
                this.lista.push(k);
            }
        }
    }

    muyRepetido(k) {
        var repeticiones = 0;
        for (var i = 0; i < this.lista.length; i++) {
            for (var j = 0; j < this.lista.length; j++)
                if (k == (this.lista[i] + this.lista[j]) && this.lista[i] != this.lista[j]) {
                    repeticiones++;
                }
        }

        if (repeticiones == 2) {
            return false;
        }

        return true;
    }

    obtener_lista() {
        this.succesion(10000);
        return this.lista;
    }
}