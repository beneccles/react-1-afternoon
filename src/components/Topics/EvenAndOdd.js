import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray: [], //Normally we would set default in the values being passed in, but in this case we can assign them here since it will only be called once.
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val) {
        // Updates "state" property 'userInput'
        this.setState({userInput: val});
      }

      assignEvenAndOdds(userInput){
          let arr = userInput.split(','); //split according to , seperation.
          let evens = [];
          let odds = [];

        //   if (userInput % 2 === 0){
        //       this.state.evenArray.push(userInput);
        //   }
        //   else {
        //       this.state.oddArray.push(userInput); // Only issue here, is that if setState was called
        // any point after, it would cause the value to mutate.
        //   }
        // The above was on the right track, but I didn't account for an entire array coming in.

        for (let i = 0; i < arr.length; i++){
            if (arr[i] % 2 === 0) { //If the remainder is 0, we know the number is even.
                evens.push(parseInt(arr[i], 10))
            } else {
                odds.push(parseInt(arr[i], 10)); // Convert string to integer at base 10
            }
        }

        this.setState({evenArray: evens, oddArray: odds});
      }
    render() {
        return(
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationbutton" onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}> Split</button>
            <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
            <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
        </div>
        )
    }
}

export default EvenAndOdd;