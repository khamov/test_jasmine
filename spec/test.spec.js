
describe('calculate add and minus', function () {

    let  calculator = new Calculator();

    beforeAll(function () {
       console.log('called before all tests');
    });

    beforeEach(function () {
       console.log('called before each test');
    });

    afterEach(function () {
        console.log('called after each test');
    });

    afterAll(function () {
       console.log('called after all tests');
    });

    it('should be able to add two numbers', function () {
       //console.log('1 + 2');
        expect(calculator.add(1, 2)).toBe(3);
    });
    it('should be able to minus numbers', function () {
        //console.log('1 + 2 + 3');
        expect(calculator.minus(1,2)).toBe(-1);
    });

});