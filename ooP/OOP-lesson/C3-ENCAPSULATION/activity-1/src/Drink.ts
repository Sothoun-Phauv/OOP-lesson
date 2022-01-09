export abstract class  Drink {
    protected name:string;
    protected price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }
    abstract getDrink(): string;
}