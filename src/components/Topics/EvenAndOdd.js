import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  assignEvenAndOdds(userInput) {
    var numArr = userInput.split(",");
    var evenArr = [];
    var oddArr = [];

    for (var i = 0; i < numArr.length; i++) {
      if (numArr[i] % 2 === 0) {
        evenArr.push(parseInt(numArr[i], 10));
      } else {
        oddArr.push(parseInt(numArr[i], 10));
      }
    }
    this.setState({ evenArray: evenArr, oddArray: oddArr });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.assignEvenAndOdds(this.state.userInput);
          }}
        >
          Split
        </button>
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
