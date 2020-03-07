/////////////////////////////////////////////////////////////////////////////
// GENERIC - 
var arrayNums = [1, 1, 2, 3, 5, 8];
var arrayStrs = ['1', '2'];
// Сделать одну функцию, которая работала бы с разными типами данных
function reverse(array) {
    return array.reverse();
}
console.log(reverse(arrayNums));
console.log(reverse(arrayStrs));
