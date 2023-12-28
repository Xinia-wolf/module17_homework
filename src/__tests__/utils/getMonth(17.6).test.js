import { getMonth } from "../../utils/getMonth(17.6).js";

describe("tests for getMonth function", () =>{
    const august = 8;
    const march = 3;

    it("should operate correctly with number 8", () => {
        expect(getMonth(august)).toBe("август");
    }),
    it("should operate correctly with number 3", () => {
        expect(getMonth(march)).toBe("март");
    })

})