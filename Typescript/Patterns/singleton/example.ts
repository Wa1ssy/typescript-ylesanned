//Singletoni klass defineerib ära instantsihankija, see laseb klientidel juurde pääseda selle unikaalsele ainsale singletonile
class Singleton {
    static #instance: Singleton;

    //singletoni enda vaikekonstruktor peaks olema alati privaatne et vältida "new" operaatori kasutamist, mis muidu asendaks eksisteeriva singletoni uuega.
    private constructor() { }


    //staatiline gettermeetod mis kontrollib juurdepääsu sellele ainsale instantsile. Selline implementatsioon laseb laiendada singletoni klassi, samas hoides ainult ühte instantsi mälus ükskõik millisel ajahetkel.
    public static get instance(): Singleton{
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton()
        }
        return Singleton.#instance;
    }

    //Singleton võib omada oma loogikat ka.
    public someMethod() {/* shit bein dun */}
}

function klientKood4() {
    const single1 = Singleton.instance;
    const single2 = Singleton.instance;

    if (single1 === single2) {
        console.log("Singletoni instantsid on identsed, esile on kutsutud eksisteeriv singleton")
    } else {
        console.log("Instantsid erinevad, singletoni loomine nurjus")
    }
}

klientKood4();