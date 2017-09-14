import bbTestModule from './test.module';

let testS;

describe('test', function () {

    beforeEach(function () {
        angular.mock.module(bbTestModule);
    });

    beforeEach(function () {
        angular.mock.inject(function ($injector) {
            testS = $injector.get('testS');
        });
    });

    it('add', function () {
        expect(testS.add(2, 5)).toBe(7);
    });

    it('multiply', function () {
        expect(testS.multiply(2, 5)).toBe(10);
    });
});