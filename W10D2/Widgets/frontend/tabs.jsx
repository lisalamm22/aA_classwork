import React from "react";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabID: 0 };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({ tabID: e.target.getAttribute("data-idx") });
  }

  render() {
    return (
      <div>
        <ul className="tabs">
          {this.props.tabs.map((tab, idx) => {
            return (
              <h1 key={idx} data-idx={idx} onClick={this.handleClick}>
                {tab.title}
              </h1>
            );
          })}
        </ul>
        <article>{this.props.tabs[this.state.tabID].content}</article>
      </div>
    );
  }
}

export default Tabs;
