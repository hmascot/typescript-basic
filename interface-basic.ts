interface Person {
    name: string;
    age?: number; // 可选可不选
    readonly id: number
}
let viking: Person = {
    name: 'viking',
    age: 14,
    id: 1
}

// viking.id = 123 // 不能赋值