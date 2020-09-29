import React from "react";
import "@testing-library/jest-dom";
import GifExpertApp from "../GifExpertApp";
import { shallow } from "enzyme";

describe("Test <GifExpertApp />", () => {
  it("Should show <GifExpertApp /> correctly", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should show a list of categories  ", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
