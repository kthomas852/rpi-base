function test() {
    console.log('All the cats');
}

function redLight(){
    axios.put('/api/pi', {pin: 22});
    setTimeout(()=>axios.post('/api/pi', {pin: 22}), 2000)
}

function greenLight(){
    axios.put('/api/pi', {pin: 27});
    setTimeout(()=>axios.post('/api/pi', {pin: 27}), 2000)
}

function blueLight(){
    axios.put('/api/pi', {pin: 17});
    setTimeout(()=>axios.post('/api/pi', {pin: 17}), 2000)
}

function whiteLight(){
    axios.put('/api/pi', {pin: 24});
    setTimeout(()=>axios.post('/api/pi', {pin: 24}), 2000)
}

function yellowLight(){
    axios.put('/api/pi', {pin: 23});
    setTimeout(()=>axios.post('/api/pi', {pin: 23}), 2000)
}

function delay(){
    setTimeout(()=>axios.post('/api/pi', {pin: 22}), 2000)
}

function cascade(){
    blueLight();
    setTimeout(greenLight, 2000);
    setTimeout(redLight, 2000);
    setTimeout(yellowLight, 2000);
    setTimeout(whiteLight, 2000);
}

function motorON(){
    axios.put('/api/pi', {pin: 25});
    console.log('motor ON')
}

function motorOFF(){
    axios.post('/api/pi', {pin: 25});
    console.log('motor OFF')
}