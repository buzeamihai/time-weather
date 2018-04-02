import React from 'react';


class Time extends React.Component {
    constructor() {
        super();
        
        this.state = {
            now: new Date()
        };
    }

    componentDidMount(){
        this.interval = setInterval(() => this.setState({
            now: new Date()
        }), 1000);
    }

    componentWillUnmout(){
        clearInterval(this.interval);
    }

    

    render(){
        
        return(
            <div className="card-panel grey darken-1 white-text center-align customize">
                <h4>Date & Time</h4>
                <h4>{ this.state.now.toLocaleString() }</h4>
            </div>
            );
    }
}

export default Time;