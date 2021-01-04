const Gpio = require('onoff').Gpio;

module.exports = {
    status: function(req, res){
        res.send(Gpio.accessible)
    },

    sense: function(req, res){
        const pin = req.body.pin;
        const target =  new Gpio(pin, 'out');
        target.read((ret)=>{res.send(ret)});
    },

    activate: function(req, res){
        const pin = req.body.pin;
        const target = new Gpio(pin, 'out');
        target.writeSync(1);
        res.send({pin: pin, active: true})
    },

    deactivate: function(req, res){
        const pin = req.body.pin ? req.body.pin : req.params.pin;
        console.log(`pin: ${pin}`);
        console.log(req.params)
        const target = new Gpio(pin, 'out');
        target.writeSync(0);
        res.send({pin: pin, active: false})
    }
};