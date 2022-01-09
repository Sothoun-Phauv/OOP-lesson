import {Feedback} from "./Feedback";

export class Product{
    name:string;
    feedbacks: Feedback[] = []
    price:number
    constructor(name:string, price:number){
        this.name = name
        this.price = price
    }
    addFeedback(feedbacks:Feedback[]){
        for (let feedback of this.feedbacks){
            return this.feedbacks.push(feedback);
        }
        
    }
}