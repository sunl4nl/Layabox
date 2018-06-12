module game
{
    export class Log{
        constructor(){

        }
        
        public static log(message?: any, ...optionalParams: any[])
        {
            console.log(message);
        }

        public static info(message?: any, ...optionalParams: any[])
        {
            console.log(message);
        }
    }
}

namespace game
{
    class logger
    {
        public static log(message?: any, ...optionalParams: any[])
        {
            console.log(message);
        }
    }
}

class logger
{
    public static log(message?: any, ...optionalParams: any[])
    {
        console.log(message);
    }
}