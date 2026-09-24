class PuuLiik {
    nimi: string;
    värv: string;
    pinnavorm: ImageBitmap;

    constructor(nimi: string, värv: string, pinnavorm: ImageBitmap) {
        this.nimi = nimi,
        this.värv = värv,
        this.pinnavorm = pinnavorm;
    }    
    public draw(x: number, y: number, canvas: HTMLCanvasElement): void {
        const ctx = canvas.getContext("2d");
        if(ctx === null) {
            return;
        }
        ctx.fillStyle = this.color;

        ctx.fillRect(x-3,y,6,20)

        ctx.beginPath();
        ctx.arc(x,y-10,15,0, Math.PI * 2);
        ctx.fill();

        console.log('joonistan ${this.nimi} puud')
    }
}

class PuuVabrik {
    static puuLiigid: PuuLiik[] = []

    public static puuTüüp(nimi: string, värv: string, pinnavorm: ImageBitmap) {
        let searchable = new PuuLiik(nimi, värv, pinnavorm)
        let tüüp = PuuVabrik.puuLiigid.find(searchable[0])
        if (tüüp == null) {
            tüüp = new PuuLiik(nimi, värv, pinnavorm)
            PuuVabrik.puuLiigid.push(tüüp)
        }
        return tüüp
    }


}

class Puu {
    x: number;
    y: number;
    tüüp: PuuLiik;

    constructor(x: number, y: number, tüüp: PuuLiik) {
        this.x = x
        this.y = y
        this.tüüp = tüüp;
    }
    draw(canvas: HTMLCanvasElement): void {
        this.tüüp.draw(canvas, this.x, this.y)
    }
}

class Mets {
    puudMetsas: Puu[]

    public istutaPuu
    (x: number, y: number, nimi: string, värv: string, pinnavorm: ImageBitmap): void
    {
        let tüüp: PuuLiik = PuuVabrik.puuTüüp(nimi,värv,pinnavorm)
        let puu = new Puu(x,y,tüüp)
        this.puudMetsas.push(puu)
    }
    drawCanvas(canvas: HTMLCanvasElement): void {
        this.puudMetsas.forEach(tree => {tree.draw(canvas)});
    }
}

