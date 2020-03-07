/////////////////////////////////////////////////////////////////////////////
// FUNCTION 
function add(a: number, b: number): number {
    return a + b
}


function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}


// Перегружать параметры у функции
interface IPosition {
    x: number | undefined
    y: number | undefined
}

interface IPositionWidthDefault extends IPosition {
    default: string
}


function position(): IPosition // перегрузка

function position(a: number): IPositionWidthDefault // перегрузка

function position(a: number, b: number): IPosition  // перегрузка

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }
    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }

    return {x: a, y: b}
}

console.log(position())
console.log(position(5))
console.log(position(5, 42))