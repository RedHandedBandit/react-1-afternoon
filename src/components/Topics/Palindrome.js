import React, {Component} from 'react'

class Palindrome extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange = (val) => {
        this.setState({userInput: val})
    }

    handleClick = (userInput) => {
        let forwards = userInput
        let backwards = userInput
        backwards = backwards.split('')
        console.log('split', backwards)
        backwards = backwards.reverse()
        console.log('reverse', backwards)
        backwards = backwards.join('')
        console.log('join', backwards)

        if(forwards === backwards){
            this.setState({palindrome: 'true'})
        } else { 
            this.setState({palindrome: 'false'})
        }
      
    }

    render(){
        return (
            <div  className="puzzleBox palindromePB"> 
                <h4> Palindrome </h4>
                <input onChange={(e) => {this.handleChange(e.target.value)}} className="inputLine" />
                <button onClick={() => this.handleClick(this.state.userInput)}  className="confirmationButton"> Check </button>
                <span className="resultsBox"> Palindrome: {this.state.palindrome} </span> 
            </div>
        )
    }
}

export default Palindrome