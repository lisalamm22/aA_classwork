import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentDidMount() {
    this.counter = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.counter);
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <div className="date">
          <h2>Time: {this.state.time.toTimeString().split(" ")[0]}</h2>
          <h2>Date: {this.state.time.toDateString()}</h2>
        </div>
      </div>
    );
  }
}

export default Clock;
