// module hello {
//     export const sqrt = Math.sqrt;  

//     export function square(x) {  
//         return x * x;  
//     }

//     export default function add (x, y) {  
//         return x + y;  
//     }
// }

module game 
{   
	export class Config {
		constructor() {
			
		}

        parse(s:string):string
        {   
            console.log(s);
            return s;
        }
	}
}

