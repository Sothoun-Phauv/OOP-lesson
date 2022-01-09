import { Store } from "./Store"
import { Product } from "./Product"
import { Customer } from "./Customer"
import {Feedback} from "./Feedback"

/*  Customer */
let c1 = new Customer("Sok", "Seyha")
let c2 = new Customer("Kim", "Dara")

/*  Product */
let pepsi = new Product("Pepsi", 1)
let noodle = new Product("Noodle", 0.5)
let phone = new Product("Sumsung", 500)
let pc=new Product("PC",1000)

/* Feedback */
let good = new Feedback("Good", 100)
good.customer=c1
let bad = new Feedback("Bad", 5)
bad.customer=c2

/*  Store */
let aeon = new Store("Aeon")
aeon.addCustomer(c1)
aeon.addProduct(pepsi)
aeon.addProduct(noodle)
aeon.addProduct(phone)
aeon.addProduct(pc)

/*  Add Feedback */
noodle.addFeedback(good)
pc.addFeedback(good)
pc.addFeedback(bad)

/*  Console */
console.log(aeon.getFeedbackContaining("good"))
console.log(aeon.getCustomerComment(c2))
console.log(aeon.getProductLessThanPrice(1))