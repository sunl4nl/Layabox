import WebGL = Laya.WebGL;
// 程序入口
// class GameMain{
//     public str:string = "world";
//     public constructor()
//     {
//         Laya.init(600,400, WebGL);
//         console.log(' hello ' + this.str);
//     }
// }
// new GameMain();


//sample
// abstract class Animal
// {   
//     // constructor(public name: string) { }

//     abstract makeSound():void;
//     move():void
//     {
//          console.log('roaming the earch...');    
//     }
// }

// class Tigger extends Animal
// {   
//     // constructor() 
//     // {
//     //     super("hello");
//     // }
//     makeSound():void
//     {
//         console.log('tigger makeSound()'); 
//     }

//     move():void
//     {
//          console.log('tigger roaming the earch...');    
//     }
// }

// let tigger:Tigger = new Tigger();
// tigger.makeSound();

//sample
// class Point2D
// {
//     x:number;
//     y:number;
// }

// interface Point3D extends Point2D
// {
//     z:number;
// }

// let position:Point3D  = {x:1, y:2, z:3}
// console.log(position.x);



//sample
type C = {x:number, y?:number};
let myAdd1:any = function({x,y}:C):number
{       
    if(y)
        return x+y;
    return x;
}

let myAdd2:(x:number, y?:number) =>number = 
function(x:number, y:number):number 
{
    return x+y;
}

function buildName(firstName:string, ...restOfName:string[])
{
    return firstName + " " + restOfName.join(" ");
}

console.log(myAdd1({x:1}));
console.log(myAdd2(1,2));
console.log(buildName("a","b","c"));

interface Card
{
    suit:string;
    card:number;
}

interface Deck
{
    suits:string[];
    cards:number[];
    createCardPicker(this:Deck) :() => Card;
}

let deck:Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function(this:Deck) 
    {
        return () =>
        {
            let pickedCard:number = Math.floor(Math.random() * 52);
            let pickedSuit:number = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

//sample
interface UIElement
{
    addClickListener(onclick :(this:void, e:Event) =>void) :void;
}

class Handler {
    info: string;
    // onClickGood(this: void, e: Event) {
    //     console.log('clicked!');
    // };
    onClickGood = (e: Event) => { this.info = e.type }
}
let h = new Handler();
// let uiElement:UIElement;
// uiElement.addClickListener(h.onClickGood);

// 函数支持重载

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {}

//函数泛型
interface IIdentity<T>
{
    (arg:T):T;
}

function identity<T>(arg:T):T
{
    return arg;
}

let output = identity<string>("type of T");
console.log(output);

// let myIdentiy:<T>(arg:T) =>T = identity;
let myIdentiy : IIdentity<number> = identity;

//类泛型
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<string>();
myGenericNumber.zeroValue = "";
myGenericNumber.add = function(x, y) { return x + y; };
console.log(myGenericNumber.add(myGenericNumber.zeroValue, "test"));



//泛型约束
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity({length: 10, value: 3});


//在泛型里使用类类型
function create<T>(c: {new(): T; }): T {
    return new c();
}

//枚举
enum Enum
{
    A,
};

let a = Enum.A;
console.log(Enum[a]);

//模块
