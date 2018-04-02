import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchWeather } from '../actions';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            cities: []
        }
    }

    onSearchInputChange = (e) => {
        this.setState({
            search: e.target.value
        });
    }

    onSearch = (e) => {
        //dispatch la actiunea de searchWeather
        this.props.searchWeather(this.state.search);
        
        //goleste inputul
        this.setState({
            search: '',
            cities: [...this.state.cities, this.state.search]
        })
    }

    renderWeather(weather, index){
        console.log(weather);
        const days = weather.forecast.simpleforecast.forecastday;
        return(
            <tr key={ index }>
                <td>
                    { this.state.cities[index] }
                </td>
                { days.map (day => ( 
                <td key={ day.date.weekday }>
                    High: { day.high.celsius } <br/>
                    Low: { day.low.celsius} <br/>
                    { day.conditions }
                </td>
                )) }
            </tr>
        );
    }

    renderHeaders () {
        if (!this.props.weather[0]) {
            return <tr></tr>;
        }
        const days = this.props.weather[0].forecast.simpleforecast.forecastday;
        return (
            <tr>
                <th>Cities</th>
                { days.map( day => (<th key={ day.date.weekday }> { day.date.weekday } </th>) ) }
            </tr>
        );
    }

    render () {
        return(
            <div className="weatherpage card-panel grey darken-1 white-text">
                <h4 className="center-align">Weather</h4>
                <input type="text" value={ this.state.search } onChange={ this.onSearchInputChange } placeholder="City in Romania"/>
                <button className="waves-effect waves-light btn" onClick= { this.onSearch}>Search</button>
                <table>
                    <thead>
                        
                        { this.renderHeaders() }

                    </thead>
                    <tbody>
                        { this.props.weather.map(this.renderWeather.bind(this)) }
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchWeather }, dispatch);
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);