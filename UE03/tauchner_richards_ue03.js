class Complex {
    constructor(arg1, arg2) {
        this.re = 0;
        this.im = 0;
        if (arg2 == undefined) {
            if (arg1 == undefined) {
                return this;
            }

            if (arg1 instanceof Complex) {
                this.re = arg1.re;
                this.im = arg1.im;
            } else {
                this.re = parseFloat(arg1);
            }
        } else {
            this.re = parseFloat(arg1);
            this.im = parseFloat(arg2);
        }

        return this;
    }

    mult(arg1, arg2) {
        if (arg2 == undefined) {
            if (arg1 == undefined) {
                return new Complex(0, 0);
            }

            if (arg1 instanceof Complex) {
                this.re = this.re * arg1.re - this.im * arg1.im;
                this.im = this.re * arg1.im + this.im * arg1.re;
            } else {
                this.re = this.re * parseFloat(arg1);
                this.im = this.im * parseFloat(arg1);
            }
        } else {
            this.re = this.re * parseFloat(arg1) - this.im * parseFloat(arg2);
            this.im = this.re * parseFloat(arg2) + this.im * parseFloat(arg1);
        }

        return this;
    }

    add(arg1, arg2) {

        if (arg1 instanceof Complex) {
            this.re = this.re + arg1.re;
            this.im = this.im + arg1.im;
        } else {
            this.re = this.re + parseFloat(arg1 == undefined ? 0 : arg1);
            this.im = this.im + parseFloat(arg2 == undefined ? 0 : arg2);
        }

        return this;
    }

    toString() {
        if ((this.re == undefined || this.re == 0) && (this.im == undefined || this.im == 0)) {
            return "0";
        }
        return (this.re == undefined || this.re == 0 ? "" : this.re) +
            (this.im == undefined || this.im == 0 || this.re == undefined || this.re == 0 ? "" : " + ") +
            (this.im == undefined || this.im == 0 ? "" : "i*" + this.im);
    }
}

let empty = new Complex();
let oneArg = new Complex(15);
let twoArg = new Complex(20, 15);
let twoArgAlt = new Complex(2, 4);
let twoArgAlt2 = new Complex(20, 40);
let onlyImArg = new Complex(0, 15);
let compArg1 = new Complex(oneArg);
let compArg2 = new Complex(twoArg);

console.log("empty " + empty.toString());
console.log("oneArg " + oneArg.toString());
console.log("twoArg " + twoArg.toString());
console.log("twoArgAlt " + twoArgAlt.toString());
console.log("onlyImArg " + onlyImArg.toString());
console.log("compArg1 " + compArg1.toString());
console.log("compArg2 " + compArg2.toString());

let multWith0 = new Complex(twoArg).mult();
let multWithRe = new Complex(twoArg).mult(2);
let multWithBoth = new Complex(twoArg).mult(2, 4);
let multWithComp = new Complex(twoArg).mult(twoArgAlt);

console.log(multWith0);
console.log(multWithRe);
console.log(multWithBoth);
console.log(multWithComp);

let addWith0 = new Complex(twoArg).add();
let addWithRe = new Complex(twoArg).add(20);
let addWithBoth = new Complex(twoArg).add(20, 40);
let addWithComp = new Complex(twoArg).add(twoArgAlt2);

console.log(addWith0);
console.log(addWithRe);
console.log(addWithBoth);
console.log(addWithComp);
