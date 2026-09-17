class Telekapult {
    protected seade: Seade

    constructor(seade: Seade) {
        this.seade = seade
    }
    lülitaSisseVälja() {
        if(this.seade.onSees()) {
            this.seade.lülitaVälja()
        } else {
            this.seade.lülitaSisse()
        }
    }

    heliMaha() {
        this.seade.setHeli(this.seade.getValjus()-10)
    }    
    heliÜles() {
        this.seade.setHeli(this.seade.getValjus()+10)
    }
    kanalVäiksemaks() {
        this.seade.setKanal(this.seade.getKanal()-1)
    }
    kanalSuuremaks() {
        this.seade.setKanal(this.seade.getKanal()+1)
    }

}


class nutiPult extends Telekapult {
    vaigistaHeli() {
        this.seade.setHeli(0)
    }
}

interface Seade {
    onSees(): boolean;
    lülitaSisse(): void;
    lülitaVälja(): void;
    getValjus(): number;
    getHeli(): void;
    setHeli(protsent: number): void;
    getKanal(): number;
    setKanal(kanalinumber: number): void;
}

class Telekas implements Seade {
    private kasOnSees: boolean = false;
    private helitase: number = 50;
}
