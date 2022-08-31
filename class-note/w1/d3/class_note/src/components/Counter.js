import { Component } from "react";

export class Counter extends Component {
    constructor(props) {
        super(props)

        const {start} = this.props;

        this.state = {
            count : start || 0,
            clickTimes: []
        }
    }

    handleClickCount = () => {

        const {count, clickTimes} = this.state;
        const {step = 1} = this.props;
        this.setState({
            count : count + step,
            clickTimes: [...clickTimes, new Date()]
        })
    }
    
    render () {
        const {handleClickCount, state, props} = this;
        const {title} = props;
        const {count, clickTimes} = state;

        return (
            <div
            style={{
              border: '1px solid black',
              padding: '2rem',
              marginBottom: '1rem',
            }}
            >
                <h4>{title}</h4>   
            <button onClick={handleClickCount}>{count}</button>

            <ul>
                {
                    clickTimes.map((date, i) => {
                        return <li key={i}>{date.toString()}</li>
                    }
                )}
            </ul>
            </div>
        )
    }
}

export default Counter;