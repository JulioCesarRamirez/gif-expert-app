import React from "react";
import "@testing-library/jest-dom";
import AddCategory from "../../components/AddCategory";
import { shallow } from "enzyme";

describe("Test in <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  it("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should change input value", () => {
    const input = wrapper.find("input");
    const value = "Hello world";
    input.simulate("change", { target: { value: value } });
  });
  it("should not send information when submit form", () => {
    wrapper.find("form").simulate("submit", { preventDefault: jest.fn() });
    expect(setCategories).not.toHaveBeenCalled();
  });
  it("should clear the input and call setCategories", () => {
    const value = "Hello world";
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: value } });
    wrapper.find("form").simulate("submit", { preventDefault: jest.fn() });
    expect(setCategories).toHaveBeenCalled();
    expect(input.prop("value")).toBe("");
  });
});
