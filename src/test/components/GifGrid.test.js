import React from "react";
import "@testing-library/jest-dom";
import GifGrid from "../../components/GifGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Test <GifGrid />", () => {
  const category = "One Punch";

  it("Should show <GifGrid /> correctly", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should show items when the images are loaded from useFetchGifs", () => {
    const gifs = [
      {
        id: "abc",
        url: "https://localhost/anything/thing.jpg",
        title: "Anything",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    const p = wrapper.find("p").exists();
    expect(p).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
