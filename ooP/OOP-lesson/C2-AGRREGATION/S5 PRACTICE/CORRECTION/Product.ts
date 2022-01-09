import { Feedback } from "./Feedback"

export class Product{
    name: string
    price: number
    feedback:Feedback[]=[]
    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }
    addFeedback(feedback: Feedback) {
        this.feedback.push(feedback)
    }
    
}