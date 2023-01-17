import { describe, expect, it, test } from "./testLib";
import * as statsAsync from "./statsAsync";
import { average, sum } from "./stats";

describe("Stats should", ()=>{
    it("calculate the sum of all elements", ()=>{
        const result = sum([1, 2, 3]);
        const expected = 6;
        expect(expected).toBe(result);
    })
    
    it("calculate the average of all elements", ()=>{
        const result = average([1, 2, 3]);
        const expected = 2;
        expect(expected).toBe(result);
    })
})

describe("Stats should async", ()=>{
    it("calculate the sum of all elements (async)", async ()=>{
        const result = await statsAsync.sum([1, 2, 3]);
        const expected = 6;
        expect(expected).toBe(result);
    })
    
    it("calculate the average of all elements (async)", async ()=>{
        const result = await statsAsync.average([1, 2, 3]);
        const expected = 2;
        expect(expected).toBe(result);
    })
})