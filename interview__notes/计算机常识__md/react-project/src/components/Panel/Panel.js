import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
import axios from "axios";
const StyledComponents = styled.div``;

class Panel extends WeElement {
  constructor(...args) {
    super(...args);
    this.state = {
      news: [],
      page: 1
    };
  }

  render() {
    return h(
      StyledComponents,
      null,
      h(
        "div",
        {
          className: "weui-panel weui-panel_access"
        },
        h(
          "div",
          {
            className: "weui-panel__hd"
          },
          "\u56FE\u6587\u7EC4\u5408\u5217\u8868"
        ),
        h(
          "div",
          {
            className: "weui-panel__bd"
          },
          this.state.news.map((item, index) => {
            return h(
              "a",
              {
                key: index,
                className: "weui-media-box weui-media-box_appmsg"
              },
              h(
                "div",
                {
                  className: "weui-media-box__hd"
                },
                h("img", {
                  className: "weui-media-box__thumb",
                  src: item.author.avatar_url,
                  alt: ""
                })
              ),
              h(
                "div",
                {
                  className: "weui-media-box__bd"
                },
                h(
                  "h4",
                  {
                    className: "weui-media-box__title"
                  },
                  item.title
                ),
                h(
                  "p",
                  {
                    className: "weui-media-box__desc"
                  },
                  item.author.loginname
                )
              )
            );
          })
        ),
        h(
          "div",
          {
            onClick: this.loadMore.bind(this),
            className: "weui-panel__ft"
          },
          h(
            "a",
            {
              className: "weui-cell weui-cell_access weui-cell_link"
            },
            h(
              "div",
              {
                className: "weui-cell__bd"
              },
              "\u67E5\u770B\u66F4\u591A"
            ),
            h("span", {
              className: "weui-cell__ft"
            })
          )
        )
      )
    );
  }

  async loadMore() {
    let data = await axios.get("https://cnodejs.org/api/v1/topics", {
      params: {
        limit: 10,
        page: this.state.page
      }
    });
    console.log(data);
    this.setState({
      news: [...this.state.news, ...data.data.data],
      page: ++this.state.page
    });
  }

  componentDidMount() {
    this.loadMore();
  }
}

Panel.css = `
`;
export default Panel;
