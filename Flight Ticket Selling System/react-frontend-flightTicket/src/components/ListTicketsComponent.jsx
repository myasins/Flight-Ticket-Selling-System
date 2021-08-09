import React, { Component } from 'react';
import FlightService from '../services/FlightService';

class ListTicketsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tickets: []
        }
    }
    sendMail(ticket_ID, flight_ID){
        FlightService.sendMailByID(ticket_ID, flight_ID);
    }
    
    viewFlight(flight_ID){
        this.props.history.push('/view_flight/' + flight_ID);
    }

    componentDidMount(){
        FlightService.getTickets().then((res) => {
            this.setState({ tickets: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Tickets List</h2>
                <div className= "row">
                    <table className = "table table-striped table-bordered">
                        
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Customer Mail</th>
                                <th>Customer ID</th>
                                <th>Seat Number</th>
                                <th>Flight ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.tickets.map(
                                    ticket =>
                                    <tr key = {ticket.ticket_ID}>
                                        <td>{ticket.customer_name}</td>
                                        <td>{ticket.customer_mail}</td>
                                        <td>{ticket.customer_ID}</td>
                                        <td>{ticket.seat_number}</td>
                                        <td>{ticket.flight_ID}</td>
                                        <td>
                                            <button style={{marginLeft: "10px"}}    onClick = { () => this.viewFlight(ticket.flight_ID)} className="btn btn-secondary">Details</button>
                                            <button style={{marginLeft: "10px"}}    onClick = { () => this.sendMail(ticket.ticket_ID, ticket.flight_ID)} className="btn btn-info">Send Mail</button>

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

export default ListTicketsComponent;