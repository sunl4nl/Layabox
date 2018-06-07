// module hello {
//     export const sqrt = Math.sqrt;  
//     export function square(x) {  
//         return x * x;  
//     }
//     export default function add (x, y) {  
//         return x + y;  
//     }
// }
var game;
(function (game) {
    class Config {
        constructor() {
        }
        parse(s) {
            console.log(s);
            return s;
        }
    }
    game.Config = Config;
})(game || (game = {}));
//# sourceMappingURL=index.js.map