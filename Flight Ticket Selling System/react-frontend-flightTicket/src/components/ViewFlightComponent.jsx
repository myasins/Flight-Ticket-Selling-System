import React, { Component } from 'react';

import FlightService from '../services/FlightService';

class ViewFlightComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            flight_ID: this.props.match.params.flight_ID,
            flight: {}
        }

    }

    componentDidMount(){
        FlightService.getFlightByID(this.state.flight_ID).then( res => {
            this.setState({flight: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Flight Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label style={{fontWeight: "bold"}}> Flight ID: </label>
                            <div> {this.state.flight.flight_ID}</div>
                        </div>
                        <div className = "row">
                            <label style={{fontWeight: "bold"}}> Ticket Price: </label>
                            <div> {this.state.flight.ticket_price + "$"}</div>
                        </div>
                        <div className = "row">
                            <label style={{fontWeight: "bold"}}> Flight company: </label>
                            <div> {this.state.flight.company_name}</div>
                        </div>
                        <div className = "row">
                            <label style={{fontWeight: "bold"}}> From where: </label>
                            <div> {this.state.flight.from_where}</div>
                        </div>
                        <div className = "row">
                            <label style={{fontWeight: "bold"}}> To where: </label>
                            <div> {this.state.flight.to_where}</div>
                        </div>
                        <div className = "row">
                            <label style={{fontWeight: "bold"}}> Departure info: </label>
                            <div> {this.state.flight.departure_date + " ---- " + this.state.flight.departure_time}</div>
                        </div>
                        <div className = "row">
                            <label style={{fontWeight: "bold"}}> Arrival info: </label>
                            <div> {this.state.flight.arrival_date + " ---- " +  this.state.flight.arrival_time}</div>
                        </div>
                        <div className = "row">
                            <label style={{fontWeight: "bold"}}>Current passenger info:</label>
                            <div> {this.state.flight.current_passenger + "/" + this.state.flight.total_capacity}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewFlightComponent;