/*
Iterator aitab nimekirjas olevaid asju järjest vaadata.
Selles näites on muuseumis erinevad eksponaadid.
Iterator näitab ühe eksponaadi korraga ja liigub edasi.
*/

class Eksponaat {
    nimi: string;
    aasta: number;

    constructor(nimi: string, aasta: number) {
        this.nimi = nimi;
        this.aasta = aasta;
    }
}

// Iterator hoiab eksponaate ja praegust kohta
class EksponaatIterator {
    eksponaadid: Eksponaat[];
    indeks: number;

    constructor(eksponaadid: Eksponaat[]) {
        this.eksponaadid = eksponaadid;
        this.indeks = 0;
    }

    // Võta järgmine eksponaat
    järgmine() {
        let eksponaat = this.eksponaadid[this.indeks];
        this.indeks++;

        return eksponaat;
    }
}

// Muuseum hoiab eksponaate
class Muuseum {
    eksponaadid: Eksponaat[];

    constructor() {
        this.eksponaadid = [];
    }

    // Lisa eksponaat
    lisa(eksponaat: Eksponaat) {
        this.eksponaadid.push(eksponaat);
    }
}

let muuseum = new Muuseum();

muuseum.lisa(new Eksponaat("Vana telefon", 1985));
muuseum.lisa(new Eksponaat("Raadio", 1970));
muuseum.lisa(new Eksponaat("Arvuti", 1995));
muuseum.lisa(new Eksponaat("Kaamera", 2002));

let iterator = new EksponaatIterator(muuseum.eksponaadid);

while (iterator.indeks < muuseum.eksponaadid.length) {
    let eksponaat = iterator.järgmine();

    console.log(eksponaat.nimi + " - " + eksponaat.aasta);
}
