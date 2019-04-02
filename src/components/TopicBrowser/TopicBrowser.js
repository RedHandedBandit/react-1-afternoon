import React, {Component} from 'react'
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum'

class TopicBrowser extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return (
            <div> 
                <p> Hello World </p>
                <div className="parent"> 
                    <EvenAndOdd />
                    <FilterObject />
                    <FilterString />
                    <Palindrome />
                    <Sum />
                </div>
            </div>
        )
    }
}

export default TopicBrowser