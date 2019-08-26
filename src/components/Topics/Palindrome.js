import React, {Component} from 'react';

class Palindrome extends Component {
    constructor () {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(val){
        this.setState({userInput: val});
    }

    isPalindrome(userInput){
        let strArr = userInput.split('');//need to spec the seperator, otherwise JS doesn't know you want seperate characters.
        let str2 = [];

        for (let i = strArr.length - 1; i >= 0; i--){
            str2.push(strArr[i]); //push each character from the string backwards into the new array
        }

        strArr = strArr.join(',');
        str2 = str2.join(','); //Convert these back into strings, otherwise React thinks we are trying to compare objects.

       if(strArr === str2){
           this.setState({palindrome: 'true'});
       }
       else {
           this.setState({palindrome: 'false'});
       }

    }

    render() {
        return (
        <div className="puzzleBox palindromePB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => this.isPalindrome(this.state.userInput)}>Check</button>
            <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
        </div>
        )
    }
}
export default Palindrome;