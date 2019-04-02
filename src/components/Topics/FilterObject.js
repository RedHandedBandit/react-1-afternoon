import React, {Component} from 'react'

class FilterObject extends Component {
    constructor(){
        super()
        this.state = {
            unFilteredArray: [
                {
                    name: 'jackson',
                    car: 'jeep',
                    color: 'white'
                },
                {
                    name: 'young',
                    color: 'white',
                    age: 26
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange = (val) => {
        this.setState({userInput: val})
        console.log(this.state)
    }

    handleClick = (obKey) => {
        let arr = this.state.unFilteredArray;
        let filtered = []
        let filter = this.state.userInput
        // let stringArray = this.state.userInput.split(' ')
        // console.log(stringArray)
        for(let i = 0; i < arr.length; i++){
            if(arr[i].hasOwnProperty(filter)){
                filtered.push(arr[i])
            }
            // return arr[i].includes(this.state.userInput)
        }
        this.setState({ filteredArray: filtered })
    }

    render(){
        // let result = this.state.filteredArray.map((el, i) => {
        //     let resultArray = []
        //     resultArray.push(el[i])
        //     return (
        //         <div key={i}> 
        //             {resultArray}
        //         </div> 
        //     )
        // })
        // console.log(result)
        return (
            <div className="puzzleBox filterObjectPB"> 
                <h4> Filter Object </h4> 
                <span className="puzzleText"> {JSON.stringify(this.state.unFilteredArray, null, 10)}  </span> 
                <input onChange={(e) => this.handleChange(e.target.value)} className="inputLine" />
                <button onClick={this.handleClick} className="confirmationButton"> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredArray, null, 10)} </span> 
            </div>
        )
    }
}

export default FilterObject