var WebGL = Laya.WebGL;
let myAdd1 = function ({ x, y }) {
    if (y)
        return x + y;
    return x;
};
let myAdd2 = function (x, y) {
    return x + y;
};
function buildName(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
console.log(myAdd1({ x: 1 }));
console.log(myAdd2(1, 2));
console.log(buildName("a", "b", "c"));
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
class Handler {
    constructor() {
        // onClickGood(this: void, e: Event) {
        //     console.log('clicked!');
        // };
        this.onClickGood = (e) => { this.info = e.type; };
    }
}
let h = new Handler();
function pickCard(x) { }
function identity(arg) {
    return arg;
}
let output = identity("type of T");
console.log(output);
// let myIdentiy:<T>(arg:T) =>T = identity;
let myIdentiy = identity;
//类泛型
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = "";
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(myGenericNumber.zeroValue, "test"));
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity({ length: 10, value: 3 });
//在泛型里使用类类型
function create(c) {
    return new c();
}
//枚举
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
;
let a = Enum.A;
console.log(Enum[a]);
//模块
//# sourceMappingURL=TypeScriptSample.js.map