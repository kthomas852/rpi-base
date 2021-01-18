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
        const pin = req.body.pin;
        const target = new Gpio(pin, 'out');
        target.writeSync(0);
        res.send({pin: pin, active: false})
    },

    buzz: function(req, res){
        const time = req.body.seconds;
        let count = 0;
        const target = new Gpio(16, 'out');
        while(time > count){
            target.writeSync(1);
            setTimeout(()=>{target.writeSync(0)}, 10);
            count++
        }
        res.send('activated')
    }
};