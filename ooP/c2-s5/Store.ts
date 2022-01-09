import {Customer} from "./Customer"
import {Product} from "./Product"
export class Store{
    name:string;
    customers:Customer[] = []
    products:Product[] = []
    constructor(name:string){
        this.name = name;
    }
    addProduct(products:Product[]){
        for (let product of products){
            return this.products.push(product);
        }
        
    }
    addCustomer(customer:Customer[]){
        for (let cus of customer){
            return this.customers.push(cus);
        }
        
    }

    getProductLessThan(price:number){
        let Product = []
        for (let product of this.products){
            if (product.price < price){
                Product.push(product.name);
            }
        }
        return Product;
    }

    getFeedbackCOntaining(comments:string){
        let Feedback = [];
        for (let pro of this.products){
            
            for (let comment of pro.feedbacks){
                if (comment.comments === comments){
                    Feedback.push(comments);
                }
            }
        }
        return Feedback;
    }

}
