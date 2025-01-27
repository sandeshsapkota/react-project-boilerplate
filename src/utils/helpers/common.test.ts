import {sumArray} from "@/utils/helpers/common.utils";
import {describe, it, expect} from "vitest";


describe("sumArray", () => {
    it("should return the sum of an array of numbers", () => {
        expect(sumArray([1, 2, 3])).toBe(6);
    });

    it("should return 0 for an empty array", () => {
        expect(sumArray([])).toBe(0);
    });
});