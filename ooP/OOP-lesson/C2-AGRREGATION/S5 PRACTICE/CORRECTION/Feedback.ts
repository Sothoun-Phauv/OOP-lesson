import { Customer } from "./Customer"

export class Feedback{
    comment: string
    evaluate: number
    customer!:Customer
    constructor(comment: string, evaluate: number) {
        this.comment = comment
        this.evaluate=evaluate
    }
}