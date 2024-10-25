// ---------------Prototyppe----------------

// let myName = "vaibhav   "
// console.log(myName.trueLength());

let myHero = ["thor", "spidarman", "ironMan"]

let heroPower = {
    thor: "thonder",
    spidarman: "swing",
    ironMan: "Knowledge",
    getSpidermanPower: function () {
        console.log(this.spiderman);
    }
}

Object.prototype.Vaibhav = function () {
    console.log("vaibhav is present all object");
}
// heroPower.Vaibhav()
// heroPower.myHero()
myHero.Vaibhav()