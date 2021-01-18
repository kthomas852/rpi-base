function test() {
    console.log('All the cats');
}

function redLight(t){
    axios.put('/api/pi', {pin: 22});
    setTimeout(()=>axios.post('/api/pi', {pin: 22}), t)
}

function greenLight(t){
    axios.put('/api/pi', {pin: 27});
    setTimeout(()=>axios.post('/api/pi', {pin: 27}), t)
}

function blueLight(t){
    axios.put('/api/pi', {pin: 17});
    setTimeout(()=>axios.post('/api/pi', {pin: 17}), t)
}

function whiteLight(t){
    axios.put('/api/pi', {pin: 24});
    setTimeout(()=>axios.post('/api/pi', {pin: 24}), t)
}

function yellowLight(t){
    axios.put('/api/pi', {pin: 23});
    setTimeout(()=>axios.post('/api/pi', {pin: 23}), t)
}

function cascade(time){
    redLight(time);
    setTimeout(()=>{greenLight(time)}, time*1);
    setTimeout(()=>{yellowLight(time)}, time*2);
    setTimeout(()=>{whiteLight(time)}, time*3);
    setTimeout(()=>{blueLight(time)}, time*4);
}

function motor(crank){
    // pin 5 is High Amps
    // pin 6 is low Amps
    // pin 13 is enable
    if(crank){
        axios.put('/api/pi', {pin: 13});
        axios.put('/api/pi', {pin: 6});
        console.log('motor ON')
    }else{
        axios.post('/api/pi', {pin: 13});
        axios.post('/api/pi', {pin: 6});
        console.log('motor OFF')
    }
}

function servo(crank){
    if(crank){
        axios.put('/api/pi', {pin: 25})
    }else{
        axios.post('/api/pi', {pin: 25})
    }
}

function buzzer(on){
    if(on){
        axios.put('/api/pi', {pin: 16})
    }else{
        axios.post('/api/pi', {pin: 16})
    }
}