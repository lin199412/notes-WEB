import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
const StyledComponents = styled.div`
  header {
    width: 100%;
    height: 50px;
    color: white;
    background-color: red;
    line-height: 50px;
    text-align: center;
  }
`;

class Header extends WeElement {
  constructor(...args) {
    super(...args);
    this.state = {
      title: "Cnode"
    };
  }

  render() {
    return h(StyledComponents, null, h("header", null, this.state.title));
  }
}

Header.css = `
header{
    width: 100%;
    height: 50px;
    color: white;
    background-color: red;
    line-height: 50px;
    text-align: center;
}
`;
export default Header;
