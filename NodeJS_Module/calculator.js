function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiple(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}




// module.exports = add;
// module.exports.add = add;
// module.exports.substract = substract;
// exports.add = add;
// exports.substract = substract;

module.exports={
    add,
    subtract,
    multiple,
    divide,
}