import React, { Component } from 'react';
    
    
export class PersonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            plusAge : this.props.age
        }
    }

    clickBirth = () => {
        this.setState({
            plusAge : this.state.plusAge +1     
        })
    }
    render() {
        const {lastName, firstName, hairColor} = this.props
        const {plusAge} = this.state
        return (
            <div>
                <h1>
                    {lastName}, {firstName}
                </h1>
                <p>Age: {plusAge}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.clickBirth}>Birthday button for {firstName} {lastName}</button>
            </div>
        )
    }   
}
    
export default PersonCard;
