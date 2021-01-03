const Gpio = require('onoff').Gpio;

module.exports = {
    status: function(){
        return Gpio.accessible
    },

    sense: function(pin){
        const target =  new Gpio(pin, 'in');
        return target.readSync();
    },

    activate: function(pin){
        const target = new Gpio(pin, 'out');
        target.writeSync(1)
        return {pin: pin, active: true}
    },

    deactivate: function(pin){
        const target = new Gpio(pin, 'out');
        target.writeSync(0)
        return {pin: pin, active: false}
    }
};