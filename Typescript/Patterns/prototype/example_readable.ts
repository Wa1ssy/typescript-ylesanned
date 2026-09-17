class AutoMobile {
    mark!: string;
    mudel!: string;
    värv!: string;
    istekohti!: number;

    /**
     *
     */
    constructor(mark: string, mudel: string, värv: string, istmeid: number) {
        this.mark = mark
        this.mudel = mudel
        this.värv = värv
        this.istekohti =istmeid
    }

    clone() {
        const clone = Object.create(this)
        clone.mark = this.mark
        clone.mudel = this.mudel
        clone.värv = this.värv
        clone.istekohti = this.istekohti
        return clone;
    }
}

function programRun3() {
    const originaal = new AutoMobile("aaa","bbb","ccc",666);
    const kloon = originaal.clone();

    console.log(originaal)
    console.log(kloon)
}

programRun3();