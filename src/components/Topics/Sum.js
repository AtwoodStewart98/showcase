import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }

  handleFirstChange(val) {
    this.setState({ number1: parseInt(val, 10) });
  }

  handleSecondChange(val) {
    this.setState({ number2: parseInt(val, 10) });
  }

  assignSum(number1, number2) {
    this.setState({ sum: number1 + number2 });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={e => this.handleFirstChange(e.target.value)}
        />
        <input
          className="inputLine"
          onChange={e => this.handleSecondChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.assignSum(this.state.number1, this.state.number2)}
        >
          Add Numbers
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
