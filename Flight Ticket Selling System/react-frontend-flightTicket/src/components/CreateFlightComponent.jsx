import React, { Component } from 'react';
import FlightService from '../services/FlightService';

class CreateFlightComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            flight_ID: this.props.match.params.flight_ID,
            company_name: '',
            ticket_price: '',
            from_where: '',
            to_where: '',
            departure_date: '',
            departure_time: '',
            arrival_date: '',
            arrival_time: '',
            current_passenger: '',
            total_capacity: ''
        }

        this.createFlight = this.createFlight.bind(this);
    }

    componentDidMount(){

        if(this.state.flight_ID === -1){
            return
        }
        else{
            FlightService.getFlightByID(this.state.flight_ID).then( (res)=> {
            let flight = res.data;
            this.setState({company_name: flight.company_name, ticket_price: flight.ticket_price,
                to_where: flight.to_where, from_where: flight.from_where, departure_date: flight.departure_date,
                departure_time: flight.departure_time, arrival_date: flight.arrival_date, arrival_time: flight.arrival_time,
                current_passenger: flight.current_passenger, total_capacity: flight.total_capacity});
            });
        }
    }
    
    createFlight = (e) => {
        e.preventDefault();
        let flight = {company_name: this.state.company_name, ticket_price: this.state.ticket_price, from_where: this.state.from_where, 
            to_where: this.state.to_where, departure_date: this.state.departure_date, departure_time: this.state.departure_time,
            arrival_date: this.state.arrival_date, arrival_time: this.state.arrival_time, current_passenger: this.state.current_passenger, total_capacity: this.state.total_capacity};
        console.log('flight =>' + JSON.stringify(flight));
        
        if(this.state.flight_ID === -1){
            FlightService.saveFlight(flight).then(res =>{
                this.props.history.push('/flights');
            });
        }
        else{
            FlightService.updateFlight(flight, this.state.flight_ID).then( res=> {
                this.props.history.push('/flights');
            })
        }
    }
    
    cancel() {
        this.props.history.push('/flights'); 
    }

    getTitle() {
        if(this.state.flight_ID === -1){
            return <h3 className="text-center">Add Flight</h3>
        }
        else{
            return <h3 className="text-center">Edit Flight</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label>Company name:</label>
                                                <input placeholder="Company name" name="company_name" className="form-control" 
                                                value={this.state.company_name} 
                                                onChange = {e => this.setState({company_name: e.target.value}) } 
                                                ></input>
                                            </div>

                                            <div className="form-group">
                                                <label>Ticket price:</label>
                                                <input placeholder="$" name="ticket_price" className="form-control" 
                                                value={this.state.ticket_price} 
                                                onChange = {e => this.setState({ticket_price: e.target.value}) } 
                                                ></input>
                                            </div>

                                            <div className="form-group">
                                                <label>From where:</label>
                                                <input placeholder="From where" name="from_where" className="form-control" 
                                                value={this.state.from_where} 
                                                onChange = {e => this.setState({from_where: e.target.value}) } 
                                                ></input>
                                            </div>

                                            <div className="form-group">
                                                <label>To where:</label>
                                                <input placeholder="To where" name="to_where" className="form-control" 
                                                value={this.state.to_where} 
                                                onChange = {e => this.setState({to_where: e.target.value}) } 
                                                ></input>
                                            </div>

                                            <div className="form-group">
                                                <label>Departure date:</label>
                                                <input placeholder="YYYY-MM-DD" name="departure_date" className="form-control" 
                                                value={this.state.departure_date} 
                                                onChange = {e => this.setState({departure_date: e.target.value}) } 
                                                ></input>
                                            </div>

                                            <div className="form-group">
                                                <label>Departure time:</label>
                                                <input placeholder="HH:MM:SS" name="departure_time" className="form-control" 
                                                value={this.state.departure_time} 
                                                onChange = {e => this.setState({departure_time: e.target.value}) } 
                                                ></input>
                                            </div>

                                            <div className="form-group">
                                                <label>Arrival date:</label>
                                                <input placeholder="YYYY-MM-DD" name="arrival_date" className="form-control" 
                                                value={this.state.arrival_date} 
                                                onChange = {e => this.setState({arrival_date: e.target.value}) } 
                                                ></input>
                                            </div>

                                            <div className="form-group">
                                                <label>Arrival time:</label>
                                                <input placeholder="HH:MM:SS" name="arrival_time" className="form-control" 
                                                value={this.state.arrival_time} 
                                                onChange = {e => this.setState({arrival_time: e.target.value}) } 
                                                ></input>
                                            </div>

                                            <div className="form-group">
                                                <label>Current passenger:</label>
                                                <input placeholder="Current passenger number" name="current_passenger" className="form-control" 
                                                value={this.state.current_passenger} 
                                                onChange = {e => this.setState({current_passenger: e.target.value}) } 
                                                ></input>
                                            </div>

                                            <div className="form-group">
                                                <label>Total capacity:</label>
                                                <input placeholder="Total capacity" name="total_capacity" className="form-control" 
                                                value={this.state.total_capacity} 
                                                onChange = {e => this.setState({total_capacity: e.target.value}) } 
                                                ></input>
                                            </div>

                                            <button type="button" className="btn btn-success" onClick={this.createFlight}>Save</button>
                                            <button type="button" className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>

                                        </form>
                                    </div>        
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateFlightComponent;