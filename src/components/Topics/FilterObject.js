import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state ={
            robots: [
                {
                    name: 'R2D2',
                    power: 'jetpack',
                    size: 4

                },
                {
                    name: 'C3PO',
                    size: 8,
                    color: 'gold'
                },
                {
                    name: 'BB8',
                    size: 2,
                }
            ],
            userInput: "",
            filteredRobots: []
        }
    }

    handleChange(val){
        this.setState({userInput: val});
    }

    filterRobots(prop){
        console.log(prop);
        let robots = this.state.robots;
        let filterRobots = [];

        for (let i = 0; i < robots.length; i++){
            if (robots[i].hasOwnProperty(prop)) {
                console.log(robots[i].hasOwnProperty(prop))
                filterRobots.push(robots[i]);
            }
        }

        this.setState({filteredRobots: filterRobots})
    }

   
    render() {
        return(
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">
                Original: {JSON.stringify(this.state.robots, null, 10)}
            </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => this.filterRobots(this.state.userInput)}>Filter</button>
            <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredRobots, null, 10)}</span>
        </div>)
    }
}

export default FilterObject;