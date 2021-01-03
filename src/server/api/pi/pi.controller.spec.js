const pi = require('./pi.controller');
const should = require('chai').should();
const test = "bar";

describe('Test of Rπ integration', function(){
    it('should return true', function(){
        test.should.eql("bar")
    });

    it('should check Rπ integration and return active', function(){
        pi.status().should.eql(true)
    });

    it('should light up all LEDs', function(){
        // visual inspection
        pi.activate(17);
        pi.activate(27);
        pi.activate(22);
        // binary inspection
        pi.sense(17).should.eql(true);
        pi.sense(27).should.eql(true);
        pi.sense(22).should.eql(true);
    });

    it('should deactivate up all LEDs', function(){
        // visual inspection
        pi.deactivate(17);
        pi.deactivate(27);
        pi.deactivate(22);
        // binary inspection
        pi.sense(17).should.eql(true);
        pi.sense(27).should.eql(true);
        pi.sense(22).should.eql(true);
    })
});