import React, {Component} from 'react'

class EvenAndOdd extends Component {
    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    inputChange = (val) => {
        this.setState({
            userInput: val
        })
        console.log(this.state)
    }

    clickChange = (userInput) => {
        let arr = userInput.split(',')
        let even = []
        let odd = []

        for(let i = 0; i < arr.length; i++){
            if(arr[i] %2 === 0){
                even.push(parseInt(arr[i], 10))
            } else {
                odd.push(parseInt(arr[i], 10))
            }
        }
        this.setState({evenArray: even, oddArray: odd})
    }

    render(){
        return (
            <div className="puzzleBox evenAndOddPB" > 
                <h4> Evens and Odds </h4>
                <input onChange={e => this.inputChange(e.target.value)} className="inputLine" />
                <button onClick={() => this.clickChange(this.state.userInput)} className="confirmationButton" > Split </button>
                <span className="resultsBox" > Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox" > Odds: {JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }
}

export default EvenAndOdd