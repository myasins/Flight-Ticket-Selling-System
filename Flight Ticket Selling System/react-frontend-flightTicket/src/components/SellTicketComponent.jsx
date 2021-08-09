import React, { Component } from 'react';
import FlightService from '../services/FlightService';

class SellTicketComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            ticket_ID: this.props.match.params.ticket_ID,
            customer_name: '',
            customer_mail: '',
            customer_ID: '',
            seat_number: '',
            flight_ID: ''
        }

        this.createTicket = this.createTicket.bind(this);
    }
    
    componentDidMount(){
        FlightService.getFlightByID(this.state.flight_ID).then( (res)=> {
            let flight = res.data;
            this.setState({company_name: flight.company_name, ticket_price: flight.ticket_price,
                to_where: flight.to_where, from_where: flight.from_where, departure_date: flight.departure_date,
                departure_time: flight.departure_time, arrival_date: flight.arrival_date, arrival_time: flight.arrival_time,
                current_passenger: flight.current_passenger, total_capacity: flight.total_capacity});
            });
    }

    createTicket = (e) => {
        e.preventDefault();
        let ticket = {customer_name: this.state.customer_name, customer_mail: this.state.customer_mail, customer_ID: this.state.customer_ID,
            seat_number: this.state.seat_number, flight_ID: this.state.flight_ID};
        
        FlightService.saveTicket(ticket).then(res => {
            this.props.history.push('/tickets');
        });
    }

    cancel(){
        this.props.history.push('/tickets');
    }


    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row"></div>
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Sell Ticket</h3>
                                            <div className="card-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label>Customer name:</label>
                                                        <input placeholder="Customer name" name="customer_name" className="form-control" 
                                                        value={this.state.customer_name} 
                                                        onChange = {e => this.setState({customer_name: e.target.value}) } 
                                                        ></input>
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Customer Email:</label>
                                                        <input placeholder="Customer email" name="customer_mail" className="form-control" 
                                                        value={this.state.customer_mail} 
                                                        onChange = {e => this.setState({customer_mail: e.target.value}) } 
                                                        ></input>
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Customer ID:</label>
                                                        <input placeholder="Customer ID" name="customer_ID" className="form-control" 
                                                        value={this.state.customer_ID} 
                                                        onChange = {e => this.setState({customer_ID: e.target.value}) } 
                                                        ></input>
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Seat number:</label>
                                                        <input placeholder="Seat no" name="seat_number" className="form-control" 
                                                        value={this.state.seat_number} 
                                                        onChange = {e => this.setState({seat_number: e.target.value}) } 
                                                        ></input>
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Flight ID:</label>
                                                        <input placeholder="Flight ID" name="flight_ID" className="form-control" 
                                                        value={this.state.flight_ID} 
                                                        onChange = {e => this.setState({flight_ID: e.target.value}) } 
                                                        ></input>
                                                    </div>

                                                    <button type="button" className="btn btn-success" onClick={this.createTicket}>Save</button>
                                                    <button type="button" className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                                </form>
                                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default SellTicketComponent;