import React, { Component } from 'react';
import FlightService from '../services/FlightService';
class ListFilteredFlightsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            flights: []
        }


        this.addFlight = this.addFlight.bind(this);
        this.editFlight = this.editFlight.bind(this);
        this.deleteFlight = this.deleteFlight.bind(this);
        this.viewFlight = this.viewFlight.bind(this);
    }

    sellTicket(flight_ID){
        this.props.history.push('/sell_ticket');
    }

    viewFlight(flight_ID){
        this.props.history.push('/view_flight/' + flight_ID);
    }

    deleteFlight(flight_ID){
        FlightService.deleteFlight(flight_ID).then( res => {
            this.setState({fligths: this.state.flights.filter(flight => flight.flight_ID !== flight_ID)});
        });
        this.props.history.push('/flights'); 
    }

    editFlight(flight_ID){
        this.props.history.push('/add_flight' + flight_ID); 
    }

    addFlight(){
        this.props.history.push('/add_flight');
    }

    componentDidMount(){

        //console.log("denemeson:" + this.props.dataFromParent);
        const filtersArray = this.props.dataFromParent.split(' ');

        //console.log("split:" + filtersArray[0]);
        FlightService.getFilteredFlights(filtersArray[0],filtersArray[1],filtersArray[2],filtersArray[3]).then((res) => {
            this.setState({ flights: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Filtered Flights {this.props.dataFromParent}</h2>
                
                <div className="row">
                </div>

                <div className= "row">
                    <table className = "table table-striped table-bordered">
                        
                        <thead>
                            <tr>
                                <th>Company name</th>
                                <th>Ticket price</th>
                                <th>From where</th>
                                <th>To where</th>
                                <th>Departure date</th>
                                <th>Departure time</th>
                                <th>Arrival date</th>
                                <th>Arrival time</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.flights.map(
                                    flight =>
                                    <tr key = {flight.id}>
                                        <td>{flight.company_name}</td>
                                        <td>{flight.ticket_price}$</td>
                                        <td>{flight.from_where}</td>
                                        <td>{flight.to_where}</td>
                                        <td>{flight.departure_date}</td>
                                        <td>{flight.departure_time}</td>
                                        <td>{flight.arrival_date}</td>
                                        <td>{flight.arrival_time}</td>
                                        <td>
                                            <button onClick = { () => this.editFlight(flight.id)} className="btn btn-info">Edit</button>
                                            <button style={{marginTop: "10px"}}    onClick = { () => this.deleteFlight(flight.flight_ID)} className="btn btn-danger">Delete</button>
                                            <button style={{marginTop: "10px"}}    onClick = { () => this.viewFlight(flight.flight_ID)} className="btn btn-secondary">View</button>
                                            <button style={{marginTop: "10px"}}    onClick = { () => this.sellTicket(flight.flight_ID)} className="btn btn-success">Sell</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>            
            </div>
        );
    }
}

export default ListFilteredFlightsComponent;