import axios from 'axios';

const FLIGHT_API_BASE_URL ="http://localhost:8080/api/v1/flights";
const TICKET_API_BASE_URL ="http://localhost:8080/api/v1/tickets";


class FlightService {
    
    getFlights(){
        return axios.get(FLIGHT_API_BASE_URL);
    }

    saveFlight(flight){
        return axios.post(FLIGHT_API_BASE_URL,flight);
    }

    getFilteredFlights(from_where,to_where,first_departure_date,second_departure_date){
        return axios.get(FLIGHT_API_BASE_URL + '/getFilteredFlights/' + from_where + '/' + to_where + '/' + first_departure_date +'/' + second_departure_date);

    }

    getFlightByID(flight_ID){
        return axios.get(FLIGHT_API_BASE_URL + '/' + flight_ID);
    }

    updateFlight(flight,flight_ID){
        return axios.put(FLIGHT_API_BASE_URL + '/' + flight_ID, flight);
    }

    deleteFlight(flight_ID){
        return axios.delete(FLIGHT_API_BASE_URL + '/' + flight_ID);
    }

    getTickets(){
        return axios.get(TICKET_API_BASE_URL);
    }

    saveTicket(ticket){
        return axios.post(TICKET_API_BASE_URL, ticket);
    }

    sendMailByID(ticket_ID, flight_ID){
        return axios.get(TICKET_API_BASE_URL + '/' + ticket_ID + '/' + flight_ID);
    }


}

export default new FlightService()