import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
const StyledComponents = styled.div`
  div {
    margin: 0;
  }
`;

class Search extends WeElement {
  constructor(...args) {
    super(...args);
    this.state = {
      bool: !0
    };
  }

  render() {
    return h(
      StyledComponents,
      null,
      h(
        "div",
        {
          className: this.state.bool
            ? "weui-search-bar"
            : "weui-search-bar weui-search-bar_focusing",
          id: "searchBar"
        },
        h(
          "form",
          {
            className: "weui-search-bar__form"
          },
          h(
            "div",
            {
              className: "weui-search-bar__box"
            },
            h("i", {
              className: "weui-icon-search"
            }),
            h("input", {
              type: "search",
              className: "weui-search-bar__input",
              id: "searchInput",
              placeholder: "\u641C\u7D22",
              required: ""
            }),
            h("a", {
              className: "weui-icon-clear",
              id: "searchClear"
            })
          ),
          h(
            "label",
            {
              onClick: this.toggle.bind(this),
              className: "weui-search-bar__label",
              id: "searchText",
              style: {
                transformOrigin: "0px 0px",
                opacity: 1,
                transform: "scale(1, 1)"
              }
            },
            h("i", {
              className: "weui-icon-search"
            }),
            h("span", null, "\u641C\u7D22")
          )
        ),
        h(
          "a",
          {
            onClick: this.toggle.bind(this),
            className: "weui-search-bar__cancel-btn",
            id: "searchCancel"
          },
          "\u53D6\u6D88"
        )
      )
    );
  }

  toggle() {
    this.setState({
      bool: !this.state.bool
    });
  }
}

Search.css = `
    div {
       margin: 0; 
    }
`;
export default Search;
