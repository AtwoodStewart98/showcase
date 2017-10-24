import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: [
        "Soldier",
        "Scout",
        "Pyro",
        "Demoman",
        "Heavy",
        "Engineer",
        "Medic",
        "Sniper",
        "Spy"
      ],
      userInput: "",
      filteredArray: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  assignFilteredArray(userInput) {
    var tf2Arr = this.state.unFilteredArray;
    var newArr = [];
    for (var i = 0; i < tf2Arr.length; i++) {
      if (tf2Arr[i].includes(userInput)) {
        newArr.push(tf2Arr[i]);
      }
    }
    this.setState({ filteredArray: newArr });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.assignFilteredArray(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}

export default FilterString;
