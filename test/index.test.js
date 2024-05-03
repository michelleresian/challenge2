const { expect } = require('chai');
const { isBalanced, isBalancedB } = require('../../index.js'); 


describe('isBalanced function', () => {
    it('should return true for balanced brackets', () => {
        expect(isBalanced("[()]{}{[()()]()}")).to.be.true;
        expect(isBalanced("([{}])")).to.be.true;
        expect(isBalanced("[()]")).to.be.true;
        expect(isBalanced("{[()]}")).to.be.true;
    });

    it('should return false for unbalanced brackets', () => {
        expect(isBalanced("{(})[]")).to.be.false;
        expect(isBalanced("[(])")).to.be.false;
        expect(isBalanced("[()")).to.be.false;
        expect(isBalanced("{[()]}]")).to.be.false;
    });
});

describe('isBalancedB function', () => {
    it('should return true for balanced brackets', () => {
        expect(isBalancedB("[()]{}{[()()]()}")).to.be.true;
        expect(isBalancedB("([{}])")).to.be.true;
        expect(isBalancedB("[()]")).to.be.true;
        expect(isBalancedB("{[()]}")).to.be.true;
    });

    it('should return false for unbalanced brackets', () => {
        expect(isBalancedB("{(})[]")).to.be.false;
        expect(isBalancedB("[(])")).to.be.false;
        expect(isBalancedB("[()")).to.be.false;
        expect(isBalancedB("{[()]}]")).to.be.false;
    });
});
