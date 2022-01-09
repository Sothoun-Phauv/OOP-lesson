import { Customer } from "./Customer"
import { Product } from "./Product"
import { Feedback } from "./Feedback"

export class Store{
    name: string
    customers: Customer[]=[]
    products:Product[]=[]
    constructor(name: string) {
        this.name=name
    }
    addCustomer(customer: Customer) {
       this.customers.push(customer)
    }
    addProduct(product: Product) {
        this.products.push(product)
    }
    getProductLessThanPrice(price: number): Product[]{
        let result: Product[]=[]
        for (let product of this.products) {
            if (product.price < price) {
                result.push(product)
            }
        }
        return result
    }
    getFeedbackContaining(keyword: string): Feedback[]{
        let result: Feedback[] = []
        for (let product of this.products) {
            for (let feedback of product.feedback) {
                if (feedback.comment == keyword) {
                    result.push(feedback)
                }
            }
        }
        return result
    }
    getCustomerComment(customer: Customer): string[]{
        let result: string[] = []
        for (let product of this.products) {
            for (let feedback of product.feedback) {
                if (feedback.customer.firstname === customer.firstname && feedback.customer.lastname == customer.lastname) {
                    result.push(feedback.comment)
                }
            }
        }
        return result
    }
}