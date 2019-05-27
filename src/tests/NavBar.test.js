import React from "react";
import Enzyme, { shallow } from "enzyme";
import NavBar from "../src/components/NavBar.js";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("Navbar component", () => {
  const wrapper = shallow(<NavBar />);

  expect(wrapper.exists()).toBe(true);
});
