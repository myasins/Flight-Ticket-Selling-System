import React, { Component } from 'react';
import ListFilteredFlightsComponent from './ListFilteredFlightsComponent';

class FilterFlightsComponent extends Component {

    state= { render: false }

    constructor(props) {
        super(props)

        this.state = {
            from_where: '',
            to_where: '',
            first_departure_date: '',
            second_departure_date: ''
        }

    }
    
   
    filterFlight = (e) => {
        this.setState({render : !this.state.render})

        e.preventDefault();
        this.from_where = this.state.from_where;
        this.to_where = this.state.to_where;
        this.first_departure_date = this.state.first_departure_date;
        this.second_departure_date = this.state.second_departure_date;

        //console.log('info =>' + JSON.stringify(from_where) + JSON.stringify(to_where) + JSON.stringify(first_departure_date) + JSON.stringify(second_departure_date));
        //buranın devamında bu bilgiler list filtered flights'a gönderilecek
        //hala gönderilmiyor undefined?
        
        //const dataFromParent = from_where;
        //<ListFilteredFlightsComponent dataFromParent = {from_where}/>
        
        console.log("deneme2 => " + this.from_where);
    }
    
    cancel() {
        this.props.history.push('/flights'); 
    }

    

    render() {
        return (
            
            <div>

                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                
                               <h3 className="text-center">Filter flights on your choose</h3>
                                    <div className="card-body">
                                        <form>
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
                                                <label>From the departure date:</label>
                                                <input placeholder="YYYY-MM-DD" name="first_departure_date" className="form-control" 
                                                value={this.state.first_departure_date} 
                                                onChange = {e => this.setState({first_departure_date: e.target.value}) } 
                                                ></input>
                                            </div>

                                            <div className="form-group">
                                                <label>To the departure date:</label>
                                                <input placeholder="YYYY-MM-DD" name="second_departure_date" className="form-control" 
                                                value={this.state.second_departure_date} 
                                                onChange = {e => this.setState({second_departure_date: e.target.value}) } 
                                                ></input>
                                            </div>
                                            
                                            <button type="button" className="btn btn-success" onClick={this.filterFlight}>Search</button>
                                            <button type="button" className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                            
                                            
                                            { this.state.render && <ListFilteredFlightsComponent dataFromParent = {this.from_where + " " +  this.to_where + " " + this.first_departure_date + " " + this.second_departure_date}/>}


                                        </form>
                                    </div>        
                            </div>
                        </div>

                   </div>
            </div>
        );
    }
}

export default FilterFlightsComponent;