interface KolmandaOsapooleYoutubeTeenus {
    loetleVideod(): string[];
    loeVideoInfo(id: string): string;
    laeVideoAlla(id: string): void;
}

class KolmandaOsapooleYoutubeClass implements KolmandaOsapooleYoutubeTeenus {
    loetleVideod(): string[] {
        console.log("Loen videod YouTube'ist")
        return ["Video1", "Video2", "Video3"]
    }
    loeVideoInfo(id: string): string {
        console.log(`Hangin video ${id} info`)
        return `Video ${id} info: info.....`
    }
    laeVideoAlla(id: string): void {
        console.log(`Laen video ${id} YouTube'ist alla`)
    }
}

class ProxyKlassYoutubeTeenusele implements KolmandaOsapooleYoutubeTeenus {
    private teenus: KolmandaOsapooleYoutubeTeenus | null = null;
    private loendiPuhver: string[] | null = null;
    private videoPuhver: Map<string, string> = new Map();
    private allalaetudVideod: Set<string> = new Set();
    public vajabVärskendust: boolean = false;

    constructor(teenus?: KolmandaOsapooleYoutubeTeenus) {
        if (teenus) {
            this.teenus = teenus;
        }
    }

    private saaTeenus(): KolmandaOsapooleYoutubeTeenus {
        if (!this.teenus) {
            this.teenus = new KolmandaOsapooleYoutubeClass();
        }
        return this.teenus;
    }

    private värskendaPuhvridKuiVaja(): void {
        if (this.vajabVärskendust) {
            this.loendiPuhver = null;
            this.videoPuhver.clear();
            this.vajabVärskendust = false;
        }
    }

    public loetleVideod(): string[] {
        this.värskendaPuhvridKuiVaja();
        if (this.loendiPuhver === null) {
            this.loendiPuhver = this.saaTeenus().loetleVideod();
        }
        return [...this.loendiPuhver];
    }

    public loeVideoInfo(id: string): string {
        this.värskendaPuhvridKuiVaja();
        const puhverdatudInfo = this.videoPuhver.get(id);
        if (puhverdatudInfo !== undefined) {
            return puhverdatudInfo;
        }

        const info = this.saaTeenus().loeVideoInfo(id);
        this.videoPuhver.set(id, info);
        return info;
    }

    public laeVideoAlla(id: string): void {
        if (this.allalaetudVideod.has(id)) {
            console.log(`Video ${id} on juba alla laaditud`);
            return;
        }

        this.saaTeenus().laeVideoAlla(id);
        this.allalaetudVideod.add(id);
    }

    public märgiVärskendamiseks(): void {
        this.vajabVärskendust = true;
    }
}

const youtube = new ProxyKlassYoutubeTeenusele();

console.log("Esimene videote päring:", youtube.loetleVideod());
console.log("Korduv videote päring (puhvrist):", youtube.loetleVideod());
console.log("Video info:", youtube.loeVideoInfo("Video1"));
console.log("Korduv info päring (puhvrist):", youtube.loeVideoInfo("Video1"));
youtube.laeVideoAlla("Video1");
youtube.laeVideoAlla("Video1");

youtube.märgiVärskendamiseks();
console.log("Videod pärast värskendamist:", youtube.loetleVideod());