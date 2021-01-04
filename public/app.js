function test() {
    console.log('All the cats');
}

function redLight(){
    // axios.get('/version')
    axios.put('/api/pi/red');
    setTimeout(()=>axios.delete('/api/pi/red'), 2000)
}

function greenLight(){
    axios.put('/api/pi/green');
    setTimeout(()=>axios.delete('/api/pi/green'), 2000)
}

function blueLight(){
    axios.put('/api/pi/blue');
    setTimeout(()=>axios.delete('/api/pi/blue'), 2000)
}