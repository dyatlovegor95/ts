/////////////////////////////////////////////////////////////////////////////
// GENERIC


const arrayNums: Array<number> = [1, 1, 2, 3, 5, 8]
const arrayStrs: Array<string> = ['1', '2']

// Сделать одну функцию, которая работала бы с разными типами данных
function reverse<T>(array: T[]): T[] {
    return array.reverse()
}


console.log(reverse(arrayNums))
console.log(reverse(arrayStrs))
