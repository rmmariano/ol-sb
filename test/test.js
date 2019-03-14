import { expect } from "chai"

import { sayHello, soma, sub } from "../src/index"
import { helloWorld, displayMyName } from "../src/myModule"


describe('main', function() {

    describe('index', function() {
        it('should say hello', function() {
            var result = sayHello()
            expect(result).to.equal("Hello guys!")
        })
    
        it('should sum numbers', function() {
            var result = soma(2, 3)
            expect(result).to.equal(5)
        })
    
        it('should sub numbers', function() {
            var result = sub(2, 3)
            expect(result).to.equal(-1)
        })
    })

    describe('myModule', function() {
        it('should show hello world', function() {
            var result = helloWorld()
            expect(result).to.equal('Hello World')
        })

        it('should display my name', function() {
            var result = displayMyName('Rod')
            expect(result).to.equal('Your name is Rod')
        })
    })
})
