import { GetGifs } from "../../helpers/getGifts";
import "@testing-library/jest-dom";

describe("Test GetGifs featch helper", () => {
  it("should bring 10 elements", async () => {
    const gifts = await GetGifs("One Punch");
    expect(gifts.length).toBe(10);
  });
  it("should bring empty array when category is not passed", async () => {
    const gifts = await GetGifs("");
    expect(gifts.length).toBe(0);
  });
});
