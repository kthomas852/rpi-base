const pi = require('./pi.controller');
const should = require('chai').should();

describe('Test of Rπ integration', function(){
    beforeEach(done => setTimeout(done, 1000));

    it('should check Rπ integration and return active', function(){
        pi.status().should.eql(true)
    });

    it('should light up all LEDs', function(){
        // visual inspection
        pi.activate(17);
        pi.activate(27);
        pi.activate(22);
        // binary inspection
        pi.sense(17).should.eql(1);
        pi.sense(27).should.eql(1);
        pi.sense(22).should.eql(1);
    });

    it('should deactivate up all LEDs', function(){
        // visual inspection
        pi.deactivate(17);
        pi.deactivate(27);
        pi.deactivate(22);
        // binary inspection
        pi.sense(17).should.eql(0);
        pi.sense(27).should.eql(0);
        pi.sense(22).should.eql(0);
    })
});