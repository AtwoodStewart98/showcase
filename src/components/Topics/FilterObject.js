import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: [
        {
          name: "Zacharias Gooligan",
          title: "Director",
          charClass: "main protagonist",
          demigod: true
        },
        {
          name: "Ra'i Thun",
          title: "Senior Operative",
          age: 43,
          demigod: false
        },
        {
          name: "Zevon Korrigan",
          title: "General Prime",
          age: 64,
          enemies: "everyone"
        }
      ],
      userInput: "",
      filteredArray: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  assignFilteredArray(userInput) {
    var characters = this.state.unFilteredArray;
    var filteredArr = [];

    for (var i = 0; i < characters.length; i++) {
      if (characters[i].hasOwnProperty(userInput)) {
        filteredArr.push(characters[i]);
      }
    }
    this.setState({ filteredArray: filteredArr });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.assignFilteredArray(this.state.userInput);
          }}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
