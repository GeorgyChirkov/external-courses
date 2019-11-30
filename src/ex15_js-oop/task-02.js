class Device {
    constructor(name,power,isTurnOn) {
        this.name = name;
        this.power = power;
        this.isTurnOn = isTurnOn;
    }
}

class Room {
    constructor() {
        this.devices = Array.prototype.slice.call(arguments);
    }

    getFullPower() {
        let summ = 0;
        this.devices.forEach(item => {
            if(item.isTurnOn) {
                summ += item.power
            }
        });
        return summ;
    }

    turnOnOff(device) {
        this.devices.forEach(item => {
            if (item.name === device.name) {
                item.isTurnOn = !item.isTurnOn//eslint-disable-line no-param-reassign
            }
        })
    }

    findDevice(device) {
        return this.devices.filter(item => item.name.includes(device))
    }
}

const printer = new Device("printer", 0.5, false);
const computer = new Device("computer", 1, true);
const tv = new Device("tv", 0.7, true);
const playstation = new Device("playstation", 1.2, true);

const bedroom = new Room(printer, computer, tv, playstation)
