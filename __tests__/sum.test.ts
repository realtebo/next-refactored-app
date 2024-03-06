import { sum } from "../helpers/sum"

describe("the sum function", () => {
    // test("two plus two is four", () => {
    //     let first = 2
    //     let second = 2
    //     let expectation = 4
    //     let result = sum(first, second)
    //     expect(result).toBe(expectation)
    // })

    // test("minus eight plus four is minus four", () => {
    //     let first = -8
    //     let second = 4
    //     let expectation = -4
    //     let result = sum(first, second)
    //     expect(result).toBe(expectation)
    // })

    test("two plus two is four", () => {
        expect(sum([2, 2])).toBe(4)
    })

    test("minus eight plus four is minus four", () => {
        expect(sum([-8, 4])).toBe(-4)
    })

    test("two plus two plus minus four is zero", () => {
        expect(sum([2, 2, -4])).toBe(0)
    })
})
