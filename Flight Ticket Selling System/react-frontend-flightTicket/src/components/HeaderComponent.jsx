import React, { Component } from 'react';

class HeaderComponent extends Component {
    


    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="flights" className="navbar-brand">Flight Ticket System</a></div>
                   
                        <a href="add_flight/-1" className="nav-link">Add Flight</a>

                        <a href="filter_flights" className="nav-link">Search Flight by Filtering</a>

                        <a href="tickets" className="nav-link">View Tickets</a>

                   </nav>

                    
                </header>
            </div>
        );
    }
}

export default HeaderComponent;