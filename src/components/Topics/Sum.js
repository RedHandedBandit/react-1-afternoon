import React, {Component} from 'react'

class Sum extends Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        }
    }

    handleNumber1Change = (val) => {
        this.setState({
            num1: parseInt(val, 10)
        })
    }

    handleNumber2Change = (val) => {
        this.setState({
            num2: parseInt(val, 10)
        })
    }

    addingNumbers = (one, two) => {
        let number1 = one
        let number2 = two
        let total = number1 + number2 
        this.setState({
            sum: total
        })
    }

    render(){
        return (
            <div className="puzzleBox sumPB"> 
                <h4> Sum </h4>
                <input onChange={(e) => this.handleNumber1Change(e.target.value)} 
                       className="inputLine" 
                       />
                <input 
                    className="inputLine" 
                    onChange={(e) => this.handleNumber2Change(e.target.value)} 
                    />
                <button className="confirmationButton"
                        onClick={() => this.addingNumbers(this.state.num1, this.state.num2)}
                        > 
                            Add 
                        </button> 
                <span  className="resultsBox"> {this.state.sum} </span>
            </div>
        )
        }
}

export default Sum