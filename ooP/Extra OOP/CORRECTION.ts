interface MarketItem {
    getPrice(): number;
    isNew(): boolean;
    canMakeNoise(): boolean;
}
class Market {
    private items: MarketItem[] = []
    addItem(item: MarketItem) {
        this.items.push(item);
    }
    getAllNewItem(): MarketItem[] {
        let result: MarketItem[] = []
        for (let item of this.items) {
            if (item.isNew()) {
                result.push(item)
            }
        }
        return result
    }
    getItemForPrice(price: number): MarketItem[] {
        let result: MarketItem[] = []
        for (let item of this.items) {
            if (item.getPrice() === price) {
                result.push(item)
            }
        }
        return result
    }
    getNumberOfSecondHand(): number {
        let count: number = 0
        for (let item of this.items) {
            if (!item.isNew()) {
                count++
            }
        }
        return count
    }
    atlease3ItemMakeNoise(): boolean {
        let result: boolean = false
        let count: number = 0
        for (let item of this.items) {
            if (item.canMakeNoise()) {
                count++
            }
        }
        if (count >= 3) {
            result = true
        } else {
            result = false
        }
        return result
    }
}
abstract class MusicIntrument implements MarketItem {
    private price: number;
    private is_new: boolean;
    constructor(price: number, is_new: boolean) {
        this.price = price
        this.is_new = is_new
    }
    getPrice(): number {
        return this.price
    }
    isNew(): boolean {
        return this.is_new
    }
    abstract canMakeNoise(): boolean;
}
class Piano extends MusicIntrument {
    private brand: string
    constructor(price: number, is_new: boolean, brand: string) {
        super(price, is_new)
        this.brand = brand
    }
    canMakeNoise(): boolean {
        return true
    }
}
class Guita extends MusicIntrument {
    private numberStrings: number
    constructor(price: number, is_new: boolean, nbStrings: number) {
        super(price, is_new)
        this.numberStrings = nbStrings
    }
    canMakeNoise(): boolean {
        return true
    }
}
class Book implements MarketItem {
    private price: number
    private is_new: boolean
    private name: string
    constructor(name: string, price: number, is_new: boolean) {
        this.name = name
        this.price = price
        this.is_new = is_new
    }
    getPrice(): number {
        return this.price
    }
    isNew(): boolean {
        return this.is_new
    }
    canMakeNoise(): boolean {
        return false
    }
}

let eaon = new Market();
let pian = new Piano(100, true, 'test');
let guita = new Guita(140, false, 40);
let oop = new Book('OOP with Typescript', 45, true);

eaon.addItem(pian);
eaon.addItem(guita);
eaon.addItem(oop)

console.log(eaon.atlease3ItemMakeNoise());
