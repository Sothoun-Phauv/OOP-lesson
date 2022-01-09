function getMax(n1, n2) {
    let max;
    if (n1 > n2) {
        max = n1;
    } else {
        max = n2;
    }
    return max;
}

function numberFromString(word) {
    return parseInt(word);
}
let a=getMax(4,numberFromString("5"));