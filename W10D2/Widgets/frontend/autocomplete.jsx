import React from "react";

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    let value = e.currentTarget.value;
    this.setState({ inputVal: value });
  }

  handleClick(e) {
    let value = e.currentTarget.innerText;
    this.setState({ inputVal: value });
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.inputVal} />
        <ul>
          {this.props.names.map((name, idx) => {
            if (name.startsWith(this.state.inputVal)) {
              return (
                <li onClick={this.handleClick} key={idx}>
                  {name}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Autocomplete;
