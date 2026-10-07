// Memento pattern: object saves its state, caretaker stores it, originator restores it.

class TekstMuutjaMemento {
    constructor(private sisukord: string) {}

    getSisu(): string {
        return this.sisukord;
    }
}

class TekstMuutja {
    private tekst = "";

    setTekst(value: string): void {
        this.tekst = value;
    }

    getTekst(): string {
        return this.tekst;
    }

    salvesta(): TekstMuutjaMemento {
        return new TekstMuutjaMemento(this.tekst);
    }

    taasta(memento: TekstMuutjaMemento): void {
        this.tekst = memento.getSisu();
    }
}

class Haldaja {
    private mementod: TekstMuutjaMemento[] = [];

    lisa(memento: TekstMuutjaMemento): void {
        this.mementod.push(memento);
    }

    getViimane(): TekstMuutjaMemento {
        const viimane = this.mementod[this.mementod.length - 1];
        if (!viimane) {
            throw new Error("Memento pole olemas");
        }
        return viimane;
    }
}

const editor = new TekstMuutja();
const haldaja = new Haldaja();

editor.setTekst("Esimene versioon");
haldaja.lisa(editor.salvesta());

editor.setTekst("Teine versioon");
haldaja.lisa(editor.salvesta());

editor.setTekst("Kolmas versioon");
console.log("Praegune tekst:", editor.getTekst());

editor.taasta(haldaja.getViimane());
console.log("Pärast taastamist:", editor.getTekst());
