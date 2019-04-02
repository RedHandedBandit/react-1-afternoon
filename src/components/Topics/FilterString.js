import React, {Component} from 'react'

class FilterString extends Component {
    constructor(){
        super()
        this.state = {
            unfilteredArray: ['Jackson','Justin','Dallin','Paul','Beau','Bob','Cole','Tj','Tanner','Charlie'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange = (val) => {
        this.setState({userInput: val})
        console.log(this.state.userInput)
    }

    handleClick = () => {
        let filtered = []
        let arr = this.state.unfilteredArray
        let text = this.state.userInput

        for(let i = 0; i < arr.length; i++){
            if(arr[i].includes(text)){
                filtered.push(arr[i])
            }
        }
        console.log(filtered)
        this.setState({filteredArray: filtered})
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB"> 
                <h4> Filter Sting </h4>
                <span  className="puzzleText"> {this.state.unfilteredArray.join(", ")} </span> 
                <input onChange={e => this.handleChange(e.target.value)}  className="inputLine" /> 
                <button onClick={this.handleClick} className="confirmationButton"> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered: {this.state.filteredArray.join(", ")} </span>
            </div>
        )
    }
}

export default FilterString