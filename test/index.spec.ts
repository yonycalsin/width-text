import a from '../src/index';

test("string text width to 24.453125", () => {
    expect(a("string")).toBe(24.453125)
})
