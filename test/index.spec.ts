import a from '../src/index';

test("string text width to 400", () => {
    expect(a("string")).toBe(24.453125)
})
