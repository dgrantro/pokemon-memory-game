import calcTries from './calcTries'

describe("Testing tries calculation", () =>{
    test("12 flips should equal 6 tries",() =>{
        expect(calcTries(12)).toBe(6);
    })

    test("13 flips should equal 6 tries",() =>{
        expect(calcTries(13)).toBe(6);
    })

    test("14 flips should NOT equal 6 tries",() =>{
        expect(calcTries(14)).not.toBe(6);
    })

})