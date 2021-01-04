function test() {
    console.log('All the cats');
}

function redLight(){
    // axios.get('/version')
    axios.put('/api/pi/red?pin=22');
    setTimeout(()=>axios.delete('/api/pi/red', {pin: 22}), 2000)
}

function greenLight(){
    axios.put('/api/pi/green', {pin: 27});
    setTimeout(()=>axios.delete('/api/pi/green', {pin: 27}), 2000)
}

function blueLight(){
    axios.put('/api/pi/blue', {pin: 17});
    setTimeout(()=>axios.delete('/api/pi/blue', {pin: 17}), 2000)
}