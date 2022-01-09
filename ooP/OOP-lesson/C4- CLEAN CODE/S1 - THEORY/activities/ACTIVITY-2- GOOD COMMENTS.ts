
// -------------------------------------------------------------
// Add a GOOD comments instead of the todos
// -------------------------------------------------------------

 class Fruit {
     type : string;
     color:string;
 }

/**
 * TODO
 * @param fruitsBox  TODO
 * @return  TODO
 */
 function isValidFruitBox(fruitsBox : Fruit[]) : boolean {
	
	// TODO
	let xx = 0;
	for(let fruit of fruitsBox) {
		if (fruit.type = "BANANA") {
			xx++;
		} 
	}
	
	// TODO
    let yy = 0;
	for(let fruit of fruitsBox) {
		if (fruit.type === "APPLE" && fruit.color === "GREEN") {
			yy++;
		} 
	}
	
	// TODO
    let zz = 0;
	for(let fruit of fruitsBox) {
		if (fruit.type = "ORANGE" || fruit.color = "LEMON") {
			zz++;
		} 
	}
		
	// TODO
	return  xx>2 &&yy> 3 && zz>1;
}