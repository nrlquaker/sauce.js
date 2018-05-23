import { expect } from 'chai'
import { greet } from '../lib/index'

describe('greeter function test', () => {
    it('should return Boys', () => {
        const result = greet('Boy')
        expect(result).to.equal('Hello, Boy!')
    })
    it('should return Girls', () => {
        const result = greet('Girl')
        expect(result).to.equal('Hello, Girl!')
    })
})
