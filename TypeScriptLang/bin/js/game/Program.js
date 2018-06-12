// /// <reference path="lib.d.ts"/>
// import * as URL from "url";
// import { ZipCodeValidator } from "./ZipCodeValidator"; //error?
var ZipCodeValidator = LModule.ZipCodeValidator;
class Program {
    constructor() {
        // let myUrl = URL.parse("http://www.typescriptlang.org");
    }
    test() {
        let myValidator = new ZipCodeValidator();
        myValidator.isAcceptable("132");
        console.log(myValidator.code);
        console.log(myValidator.cube(10));
        console.log("Programe()");
    }
}
new Program().test();
//# sourceMappingURL=Program.js.map