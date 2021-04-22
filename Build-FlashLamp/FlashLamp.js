/*
let FlashLamp = function () {

    this.setBattery = function (battery) {
        this.battery = battery;
    };

    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    };

    this.light = function () {
        if(this.status){
            alert("Lighting");
        } else {
            alert("Not lighting");
        }
    };

    this.turnOn = function () {
        this.status = true;
    };

    this.turnOff = function () {
        this.status = false;
    }
}
let Battery = function () {
    this.setEnergy = function (energy) {

        this.energy = energy;
    };
    this.getEnergy = function () {

        return this.energy;
    };
    this.decreaseEnergy = function () {

        if (this.energy > 0) {
            this.energy--;
        }
    }
}
let battery = new Battery();
battery.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.light();

document.write("Turn on<br/>")
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

document.write("Turn off<br/>")
flashLamp.turnOff();
flashLamp.light();
*/
class FlashLamp {
    constructor(name) {
        this.battery = 100;
        this.status = false;
    }

    checkOnOff() {
        document.write("Flash is OFF !<br/>");
        return this.status;
    }

    turnOn() {
        this.decreaseBattery();
        this.status = true;
        document.write('Flash is ON <br/>')
    }

    turnOff() {
        this.chargeBattery();
        this.status = false;
        document.write('Flash is OFF and charging ! <br/>')
    }

    decreaseBattery() {
        this.battery--;
    }

    chargeBattery() {
        if (this.battery < 100) {
            this.battery++;
        }
    }
}