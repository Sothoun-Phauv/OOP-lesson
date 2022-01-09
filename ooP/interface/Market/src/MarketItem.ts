

interface  MarketItem{
    getPrice():number;
    isNew():boolean;
}


abstract class MusicInstucment implements MarketItem{
    private price:number
    private isNews:boolean
    constructor(price:number, isNew:boolean){
        this.price = price
        this.isNews = isNew

    }
    getPrice():number{
        return this.price
    };
    isNew():boolean{
        return this.isNews
    };
}

class Book extends MusicInstucment{
   
    private name:string
    constructor(price:number, isNew:boolean, name:string){
        super(price,isNew)
        this.name = name
        
    }
    getPrice():number{
        return this.getPrice()
    };
    isNew():boolean{
        return this.isNew()
    };

}

class Piano extends MusicInstucment{
    private brand:string
    
    constructor(brand:string, price:number,isNew:boolean){
        super(price, isNew)
        this.brand = brand
        
    }
    getPrice():number{
        return this.getPrice()
    }
    isNew():boolean{
        return this.isNew()
    }
}

class Guitar extends MusicInstucment{
    private numberOfstring:number;
    constructor(price:number, isNew:boolean, nbString:number){
        super(price, isNew);
        this.numberOfstring = nbString
    }
}


class Market{
    private items:MarketItem[] =[]
    addItem(item:MarketItem){
        this.items.push(item);
    }
    getNewItemForPrice(price:number){

    }
}

let piano = new Piano('test',100,false);
console.log(piano.getPrice());