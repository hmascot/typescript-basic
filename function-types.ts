function add(x: number, y: number, z?: number): number {
    if(typeof z === 'number') {
        return x + y + z
    } else {
        return x + y
    }
    
}
add(1,2)
interface ISum {
    (x: number, y: number, z?: number): number
}
// let add2: (x: number, y: number, z?: number) => number = add
let add2: ISum = add