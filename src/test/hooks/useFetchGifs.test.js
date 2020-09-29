import { renderHook } from "@testing-library/react-hooks";
import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Test in hook useFetchGifs", () => {
  it("should return the initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  it("should return a images array and loading in false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toEqual(10);
    expect(loading).toBe(false);
  });
});
