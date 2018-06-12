var LModule;
(function (LModule) {
    LModule.numberRegexp = /^[0-9]+$/;
    class ZipCodeValidator {
        constructor() {
            this.error = "error";
            this.code = 123456;
        }
        isAcceptable(s) {
            return s.length === 5 && LModule.numberRegexp.test(s);
        }
        cube(x) {
            return x;
        }
    }
    LModule.ZipCodeValidator = ZipCodeValidator;
})(LModule || (LModule = {}));
//# sourceMappingURL=ZipCodeValidator.js.map