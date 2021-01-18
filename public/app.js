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

function delay(){
    setTimeout(()=>axios.post('/api/pi', {pin: 22}), 2000)
}

function cascade(){
    redLight(1000);
    setTimeout(greenLight(1000), 1000);
    setTimeout(yellowLight(1000), 2000);
    setTimeout(whiteLight(1000), 3000);
    setTimeout(blueLight(1000), 4000);
}

function motorON(){
    // pin 5 is High Amps
    // pin 6 is low Amps
    // pin 13 is enable
    axios.put('/api/pi', {pin: 13});
    axios.put('/api/pi', {pin: 5});
    console.log('motor ON')
}

function motorOFF(){
    axios.post('/api/pi', {pin: 13});
    axios.post('/api/pi', {pin: 5});
    console.log('motor OFF')
}