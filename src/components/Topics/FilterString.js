import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            strTheory: [
                'apple',
                'bacon',
                'toast',
                'cheese'
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    filterStrings(userInput){
        let newStr = this.state.strTheory;
        let filterFood = [];

        for (let i = 0; i < newStr.length; i++){
            if (newStr[i].includes(userInput)) {
                // includes asks "is it included in the array?"
                filterFood.push(newStr[i]);
            }
        }

        this.setState({filteredArray: filterFood});
    }

    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">
                    Food: {JSON.stringify(this.state.strTheory, null, 10)}
                </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterStrings(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Foods: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>)
    }
}

export default FilterString;