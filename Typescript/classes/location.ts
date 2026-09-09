/*
kirjuta klass asukoha jaoks kus on kirjas latitude, longitude, aadress, postiindeks, elamu tuup, maja varv, korruste arv, katusematerjal
*/

export class Location
{
    latitude: number;
    longitude: number;
    aadress: string;
    postiindeks: string;
    elamu_tuup: string;
    maja_varv: string;
    korruste_arv: number;
    katusematerjal: string;

    constructor(
        latitude: number,
        longitude: number,
        aadress: string,
        postiindeks: string,
        elamu_tuup: string,
        maja_varv: string,
        korruste_arv: number,
        katusematerjal: string
    )
    {
        this.latitude = latitude;
        this.longitude = longitude;
        this.aadress = aadress;
        this.postiindeks = postiindeks;
        this.elamu_tuup = elamu_tuup;
        this.maja_varv = maja_varv;
        this.korruste_arv = korruste_arv;
        this.katusematerjal = katusematerjal;
    }

    asukoha_info(): void
    {
        console.log("Latitude: " + this.latitude);
    }

    get_maja_varv(): string
    {
        return this.maja_varv;
    }

    set_maja_varv(uus_maja_varv: string): void
    {
        this.maja_varv = uus_maja_varv;
    }
}
