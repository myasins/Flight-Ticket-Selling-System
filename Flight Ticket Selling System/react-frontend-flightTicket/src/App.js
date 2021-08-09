import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListFlightsComponent from './components/ListFlightsComponent'
import CreateFlightComponent from './components/CreateFlightComponent';
import FilterFlightsComponent from './components/FilterFlightsComponent';
import ViewFlightComponent from './components/ViewFlightComponent';
import SellTicketComponent from './components/SellTicketComponent';
import ListTicketsComponent from './components/ListTicketsComponent';


function App() {
  return (
      <Router>
          <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path ="/" exact component = {ListFlightsComponent}></Route>
                <Route path ="/flights" component = {ListFlightsComponent}></Route>
                <Route path ="/add_flight/:flight_ID" component = {CreateFlightComponent}></Route>
                <Route path ="/filter_flights" component = {FilterFlightsComponent}></Route> 
                <Route path ="/view_flight/:flight_ID" component = {ViewFlightComponent}></Route>
                <Route path ="/sell_ticket" component = {SellTicketComponent}></Route>
                <Route path = "/tickets" component = {ListTicketsComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
      </Router>
    
  );
}

export default App;
