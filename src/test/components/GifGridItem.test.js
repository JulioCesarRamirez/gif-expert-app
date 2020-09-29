import React from "react";
import "@testing-library/jest-dom";
import GifGridItem from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe("Test in <GifGridItem />", () => {
  const title = "A title";
  const url = "https://localhost/algo.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  it("Should show <GifGridItem /> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Should has a paragraph with the title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });
  it("Should has an image similar to url and alt from props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
  it("Should has animate__fadeIn className", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");
    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
