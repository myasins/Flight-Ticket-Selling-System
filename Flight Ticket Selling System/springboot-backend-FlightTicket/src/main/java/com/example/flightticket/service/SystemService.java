package com.example.flightticket.service;

import java.sql.Date;
import java.util.List;

import com.example.flightticket.model.Flight;
import com.example.flightticket.model.Ticket;

public interface SystemService {
	List<Flight> getAllFlights();
	Flight createFlight(Flight flight);
	List<Flight> getFilteredFlights(String from_where, String to_where, 
			Date first_departure_date, Date second_departure_date);
	Flight getFlightByID(Long id);
	Flight updateFlight(Long id, Flight flight);
	void deleteFlight(Long id);
	List<Ticket> getAllTickets();
	Ticket createTicket(Ticket ticket);
	Ticket getTicketByID(Long tid);
	
	void sendEmail(String toEmail, String subject, String body);
	
}
