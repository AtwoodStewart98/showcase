import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: ""
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  assignPalindrome(userInput) {
    var normal = userInput;
    var reverse = userInput;
    reverse = reverse
      .split("")
      .reverse()
      .join("");

    if (normal === reverse) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.assignPalindrome(this.state.userInput)}
        >
          Execute Order 66
        </button>
        <span className="resultsBox">
          Palindrome: {JSON.stringify(this.state.palindrome, null, 10)}
        </span>
      </div>
    );
  }
}

export default Palindrome;
