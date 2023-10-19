const {sum, subtract, multiply, divide, factorial} = require('../index.js')



it('should add two numbers correctly', () => {
    const result = sum(4,6)

    expect(result).toBe(10)
});

it('should subtract two numbers correctly', () => {
    const result = subtract(4,6)

    expect(result).toBe(-2)
});

it('should multiply two numbers correctly', () => {
    const result = multiply(4,6)

    expect(result).toBe(24)
});

it('should divide two numbers correctly', () => {
    const result = divide(4,2)

    expect(result).toBe(2)
});


describe('Should do factorial', () => {
    it('should throw an error of the n in factorial is negative', () => {
        expect(() => factorial(-1))
    });

    it('should return 1 if the n in factorial is zero', () => {
        expect(factorial(0)).toBe(1)
    });

    it('should return the factorial of n that is positive', () => {
        expect(factorial(5)).toBe(120)
    });
    
    
})