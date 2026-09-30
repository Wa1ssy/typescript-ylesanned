/*
Command paneb tegevuse eraldi käsu sisse.
Pult saab käsu ja käivitab selle.
Selles näites kasutame käske lampide juhtimiseks.
*/

// Kõik käsud kasutavad seda
class Käsk {
    käivita() {
        console.log("Käsk käivitati");
    }
}

// See klass on lamp
class Lamp {
    nimi: string;

    constructor(nimi: string) {
        this.nimi = nimi;
    }

    // Paneme lambi põlema
    lülitaSisse() {
        console.log(this.nimi + " lamp lülitati sisse");
    }

    // Paneme lambi kinni
    lülitaVälja() {
        console.log(this.nimi + " lamp lülitati välja");
    }
}

// See käsk paneb lambi põlema
class SisseKäsk extends Käsk {
    lamp: Lamp;

    constructor(lamp: Lamp) {
        super();
        this.lamp = lamp;
    }

    käivita() {
        this.lamp.lülitaSisse();
    }
}

// See käsk paneb lambi kinni
class VäljaKäsk extends Käsk {
    lamp: Lamp;

    constructor(lamp: Lamp) {
        super();
        this.lamp = lamp;
    }

    käivita() {
        this.lamp.lülitaVälja();
    }
}

// Pult saab erinevaid käske käivitada
class Pult {
    vajuta(käsk: Käsk) {
        console.log("Nuppu vajutati");
        käsk.käivita();
    }
}

// Loome kaks lampi
const elutoaLamp = new Lamp("Elutoa");
const köögiLamp = new Lamp("Köögi");

const elutubaSisse = new SisseKäsk(elutoaLamp);
const elutubaVälja = new VäljaKäsk(elutoaLamp);
const köökSisse = new SisseKäsk(köögiLamp);
const pult = new Pult();

pult.vajuta(elutubaSisse);
pult.vajuta(köökSisse);
pult.vajuta(elutubaVälja);