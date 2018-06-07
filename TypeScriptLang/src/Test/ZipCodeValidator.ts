namespace LModule
{
    export let numberRegexp = /^[0-9]+$/;

    export class ZipCodeValidator 
    {       
        private error:string = "error";
        public code:number = 123456;

        public isAcceptable(s: string) :boolean
        {   
            return s.length === 5 && numberRegexp.test(s);
        }

        public cube(x:number):number
        {
            return x;
        }
    }
}