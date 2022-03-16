
function add(a:string , b:string):string{

    return a+b;

}
console.log(add('Hello ','World'))

//-------------------------------------------//

interface MyArray{

    howDoIt:string 
    simeArray:Array<number | string>
    withData?:Array<MyArray>

}

 

const myHomeTask: MyArray = {
    howDoIt: 'I do it well',
    simeArray: ['string one', 'string two', 42],
    withData: [{howDoIt: 'I do it well too!', simeArray: ['string one', 23]}]
}
console.log(myHomeTask)

//----------------------------------------------//

//Это как вариант кода,мои попытки были ниже в комменатриях но они оказались тщетны//

interface MyAray<T> {
    [n: number]: T;

    reduce<U>(fun: (previousValue: string, currentValue: T) => U, initialValue: T): U;
}

type StringOrNumber = number | string;
const arr: MyAray<StringOrNumber> = [1, 2, '3', 4];
const result: StringOrNumber = arr.reduce((previousValue: string, currentValue: StringOrNumber) => {
    return previousValue + currentValue;
}, 0);

console.log(result);
console.log();//не обращайте внимания на этот консоль,он нужен был для создания PR//

// interface MyArr<T>{
    
//     [n: number]: T;
//     reduce <U>(fn: (el: T) => U): U[];

// }

// const tsArr: Array<number> = [1,2,3,4];

// tsArr.reduce((i:number | string) => i + 1);
// tsArr.reduce((i:number | string) => `${i} + 1`);

// function getLen<T extends Array<any>(arr: T): number{

//     return arr.length;
// }