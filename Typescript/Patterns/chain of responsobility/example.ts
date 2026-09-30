/*
Chain of Responsibility annab probleemi ühelt inimeselt teisele.
Kui esimene inimene ei saa aidata, annab ta probleemi edasi.
Selles näites liigub IT probleem läbi kolme töötaja.
*/

abstract class Inimene {
    protected järgmine?: Inimene;

    // Pane järgmine inimene paika
    setJärgmine(inimene: Inimene): Inimene {
        this.järgmine = inimene;
        return inimene;
    }

    // Saada probleem järgmisele inimesele
    lahenda(probleem: string): void {
        if (this.järgmine) {
            this.järgmine.lahenda(probleem);
        } else {
            console.log("Probleemi ei saanud lahendada");
        }
    }
}

// Aita parooli probleemiga
class Kasutajatöötaja extends Inimene {
    lahenda(probleem: string): void {
        if (probleem === "parool") {
            console.log("Kasutajatöötaja taastas parooli");
        } else {
            // Saada probleem edasi
            console.log("Kasutajatöötaja saadab probleemi edasi");
            super.lahenda(probleem);
        }
    }
}

// Aita programmi probleemiga
class ITTöötaja extends Inimene {
    lahenda(probleem: string): void {
        if (probleem === "programm") {
            console.log("IT töötaja parandas programmi");
        } else {
            // Saada probleem edasi
            console.log("IT töötaja saadab probleemi edasi");
            super.lahenda(probleem);
        }
    }
}

// Aita interneti probleemiga
class VõrguTöötaja extends Inimene {
    lahenda(probleem: string): void {
        if (probleem === "internet") {
            console.log("Võrgu töötaja parandas interneti");
        } else {
            super.lahenda(probleem);
        }
    }
}

const kasutajatöötaja = new Kasutajatöötaja();
const itTöötaja = new ITTöötaja();
const võrguTöötaja = new VõrguTöötaja();

kasutajatöötaja
    .setJärgmine(itTöötaja)
    .setJärgmine(võrguTöötaja);

kasutajatöötaja.lahenda("parool");
kasutajatöötaja.lahenda("programm");
kasutajatöötaja.lahenda("internet");
