// /// <reference path="lib.d.ts"/>
// import * as URL from "url";

// import { ZipCodeValidator } from "./ZipCodeValidator"; //error?
import ZipCodeValidator = LModule.ZipCodeValidator;
class Program
{
    constructor()
    {       
        // let myUrl = URL.parse("http://www.typescriptlang.org");
    }

    test():void
    {
        let myValidator = new ZipCodeValidator();
        myValidator.isAcceptable("132");
        console.log(myValidator.code);
        console.log(myValidator.cube(10));
        console.log("Programe()");
    }
}
new Program().test();