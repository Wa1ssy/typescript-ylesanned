


interface VehicleFactory 
{

    createACar(): VehicleProductA;
    createATram(): VehicleProductB;

}

class CarFactory implements VehicleFactory 
{
    public createACar() : VehicleProductA 
    {
        return new CarProduct();
    }
    public createATram() : VehicleProductB
    {
        return null
    }

}

class TramFactory implements VehicleFactory 
{
    public createACar() : VehicleProductA 
    {
        return null;
    }
    public createATram() : VehicleProductB
    {
        return new TramProduct();
    }

}

interface VehicleProductA 
{
    whatIsThis(): string;
}

interface VehicleProductB
{
    whatIsThis(): string;
    howManySeats(): number;
}

class CarProduct implements VehicleProductA 
{
    public whatIsThis() {
        return "This is a volvo 740"
    }
}

class CarProduct2 implements VehicleProductA
{
    public whatIsThis() {
        return "This is a volvo S80"
    }
}

class TramProduct implements VehicleProductB
{
    public whatIsThis() {
        return "This is a Škoda tram"
    }
}

class TramProduct2 implements VehicleProductB
{
    public whatIsThis() {
        return "This is a hispaania tram"
    }
}