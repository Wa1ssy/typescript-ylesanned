class Maja {
    aadress: string;
    korrustearv: number;
    linn: string;
    onParkimiskoht: boolean;
    onAed: boolean;

    constructor(majaEhitaja: MajaEhitaja) {
        this.aadress = majaEhitaja.Aadress;
        this.korrustearv = majaEhitaja.korrused;
        this.linn = majaEhitaja.Linn;
        this.onParkimiskoht = majaEhitaja.Parkla;
        this.onAed = majaEhitaja.Aed;
    }
}
class MajaEhitaja {
    private readonly _aadress: string;
    private _korrustearv: number = 0;
    private _linn!: string;
    private _onParkimiskoht: boolean = false;
    private _onAed: boolean = false;

    constructor(aadress: string) {
        this._aadress = aadress;
    }
    setKorruseid(korruseid: number): this {
        this._korrustearv = korruseid;
        return this;
    }
    setLinn(linn: string): this {
        this._linn = linn;
        return this;
    }
    ehitaParkla(): this {
        this._onParkimiskoht = true;
        return this;
    }
    ehitaAed(): this {
        this._onAed = true;
        return this;
    }
    build() {
        return new Maja(this);
    }

    get Parkla() {
        return this._onParkimiskoht
    }
    get Aed() {
        return this._onAed
    }
    get Aadress() {
        return this._aadress
    }
    get korrused() {
        return this._korrustearv
    }
    get Linn() {
        return this._linn
    }
}

function klientKood2() {
    const muMaja = new MajaEhitaja('Sõpruse pst 182')
    .setLinn("Tallinn")
    .setKorruseid(2)
    .ehitaAed()
    .ehitaParkla()
    .build()

    console.log(muMaja)
}

klientKood2();