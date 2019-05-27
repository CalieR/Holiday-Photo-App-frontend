import React from "react";
// import ReactDOM from "react-dom";
import NavBar from "./NavBar.js";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<NavBar />", () => {
  it("should render NavBar", () => {
    const wrapper = shallow(<NavBar />);
    console.log(wrapper.debug);
  });
});
