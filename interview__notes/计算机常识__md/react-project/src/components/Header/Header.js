import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
const StyledComponents = styled.div`
  header {
    height: 50px;
    width: 100%;
    text-align: center;
    line-height: 50px;
    background-color: red;
    color: white;
  }
`;

class Header extends WeElement {
  constructor(...args) {
    super(...args);
    this.state = {
      title: "微信"
    };
  }

  render() {
    return h(
      StyledComponents,
      null,
      h("div", null, h("header", null, this.state.title))
    );
  }
}

Header.css = `
    header {
        height: 50px;
        width: 100%;
        text-align: center;
        line-height: 50px;
        background-color:red;
        color: white;
    }
`;
export default Header;
