var game;
(function (game) {
    class Log {
        constructor() {
        }
        static log(message, ...optionalParams) {
            console.log(message);
        }
        static info(message, ...optionalParams) {
            console.log(message);
        }
    }
    game.Log = Log;
})(game || (game = {}));
(function (game) {
    class logger {
        static log(message, ...optionalParams) {
            console.log(message);
        }
    }
})(game || (game = {}));
class logger {
    static log(message, ...optionalParams) {
        console.log(message);
    }
}
//# sourceMappingURL=loger.js.map