class CarProperties {
    läbisõit: number;
    kaal: number;
    keretüüp: string;
    istmeteArv: number;
    autoVärv: string;
    hoiuruumiMaht: number;
    vedrustuseSüsteemiTüüp: string;
    piduritüüp: string;
    tootmisaasta: number;

    constructor(
        läbisõit: number,
        kaal: number,
        keretüüp: string,
        istmeteArv: number,
        autoVärv: string,
        hoiuruumiMaht: number,
        vedrustuseSüsteemiTüüp: string,
        piduritüüp: string,
        tootmisaasta: number
    ) {
        this.läbisõit = läbisõit;
        this.kaal = kaal;
        this.keretüüp = keretüüp;
        this.istmeteArv = istmeteArv;
        this.autoVärv = autoVärv;
        this.hoiuruumiMaht = hoiuruumiMaht;
        this.vedrustuseSüsteemiTüüp = vedrustuseSüsteemiTüüp;
        this.piduritüüp = piduritüüp;
        this.tootmisaasta = tootmisaasta;
    }


    kuvaKuulInfo(): void {
        console.log(`Läbisõit: ${this.läbisõit}`);
        console.log(`Piduritüüp: ${this.piduritüüp}`);
        console.log(`Tootmisaasta: ${this.tootmisaasta}`);
        console.log(`Vedrustuse süsteemitüüp: ${this.vedrustuseSüsteemiTüüp}`);
    }

    kuvaMugavusInfo(): void {
        console.log(`Värv: ${this.autoVärv}`);
        console.log(`Hoiuruumi maht: ${this.hoiuruumiMaht} liitrit`);
        console.log(`Tootmisaasta: ${this.tootmisaasta} a`);
        console.log(`Keretüüp: ${this.keretüüp}`);
        console.log(`Istmete arv: ${this.istmeteArv}`);
    }

    suurendaOdomeetrit(kilomeetrid: number): void {
        this.läbisõit += kilomeetrid;
    }

    kuvaOdomeeter(): void {
        console.log(`Auto läbisõit on ${this.läbisõit} kilomeetrit.`);
    }
}


const auto = new CarProperties(
    150000,
    1500,
    "Universaal",
    5,
    "Tumepruun",
    500,
    "Õhkvedrustus",
    "Ketas",
    2010
);

auto.kuvaKuulInfo();
auto.kuvaMugavusInfo();

auto.suurendaOdomeetrit(5000);

auto.kuvaOdomeeter();