import { getMonth } from "../../utils/getMonth(17.6).js";

describe("tests for getMonth function", () => {
   
    it("should operate correctly with number 8", () => {
        expect(getMonth(8)).toBe("август");
    }),
    it("should operate correctly with number 3", () => {
        expect(getMonth(3)).toBe("март");
    })

})