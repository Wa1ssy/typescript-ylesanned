interface Subjekt {
    attach (jälgija: Jälgija): void;
    detach (jälgija: Jälgija): void;
    teavita (): void;
}
class KindelSubjekt implements Subjekt {
    public olek: number;
    private jälgijad : Jälgija[] = [];
    private attach(jälgija: Jälgija): void {
        const onOlemas = this.jälgijad.includes(jälgija);
        if (onOlemas) {
            return console.log('Jälgija on juba lisatud');
        }
        console.log('Jälgija lisatud');
        this.jälgijad.push(jälgija);
    }
    public detach(jälgija: Jälgija): void {
        const jälgijaIndex = this.jälgijad.indexOf(jälgija);
    }