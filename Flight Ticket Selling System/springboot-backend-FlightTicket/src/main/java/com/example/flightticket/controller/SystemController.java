package com.example.flightticket.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.flightticket.model.Flight;
import com.example.flightticket.model.Ticket;
import com.example.flightticket.service.SystemService;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class SystemController {

	private SystemService systemService;
	
	public SystemController(SystemService systemService) {
		super();
		this.systemService = systemService;
	}
	
	@GetMapping("/flights")
	public List<Flight> getAllFlights(){
		return systemService.getAllFlights();
	}
	
	@PostMapping("/flights")
	public Flight createFlight(@RequestBody Flight flight){
		return systemService.createFlight(flight);
	}
	
	@GetMapping("/flights/{id}")
	public ResponseEntity<Flight> getFlightByID(@PathVariable Long id){
		return new ResponseEntity<Flight>(systemService.getFlightByID(id), HttpStatus.OK);
	}
	
	@RequestMapping(value= "flights/getFilteredFlights/{from_where}/{to_where}/{first_departure_date}/{second_departure_date}")
	public List<Flight> getFilteredFlights(@PathVariable String from_where, @PathVariable String to_where,
			@PathVariable Date first_departure_date, @PathVariable Date second_departure_date){
		return systemService.getFilteredFlights(from_where, to_where, first_departure_date, second_departure_date);
	}
	
	@PutMapping("flights/{id}")
	public ResponseEntity<Flight> updateFlight(@PathVariable Long id, @RequestBody Flight flight){
		return new ResponseEntity<Flight>(systemService.updateFlight(id, flight),HttpStatus.OK);
	}
	
	@DeleteMapping("flights/{id}")
	public ResponseEntity<String> deleteFlight(@PathVariable Long id){
		systemService.deleteFlight(id);
		return new ResponseEntity<String>("Deleted successfully!", HttpStatus.OK);
	}
	
	@GetMapping("/tickets")
	public List<Ticket> getAllTickets(){
		return systemService.getAllTickets();
	}
	
	@PostMapping("/tickets")
	public Ticket createTicket(@RequestBody Ticket ticket){
		Long id = Long.valueOf(ticket.getFlight_ID());
		mailFlightInfo(ticket, systemService.getFlightByID(id));
		
		return systemService.createTicket(ticket);
	}
	
	@GetMapping("/tickets/{tid}/{id}")
	public void sendMailByID(@PathVariable Long tid, @PathVariable Long id){
		Ticket ticket = systemService.getTicketByID(tid);
		Flight flight = systemService.getFlightByID(id);
		
		mailFlightInfo(ticket,flight);
	}
	
	public void mailFlightInfo(Ticket ticket, Flight flight) {
		
		String toEmail = ticket.getCustomer_mail();
		String subject = "Your Flight Info - " + ticket.getCustomer_name();
		String body = "Dear Mr./Mrs. " + ticket.getCustomer_name() + ", \n\n" 
				+ "The details of flight ticket you just bought is here. \n" 
				+ "Company name: " + flight.getCompany_name() + "\n"
				+ "From where: " + flight.getFrom_where() + "\n"
				+ "To where: " + flight.getTo_where() + "\n"
				+ "Departure date & time: " + flight.getDeparture_date() + " -- " + flight.getDeparture_time() + "\n"
				+ "Arrival date & time: " + flight.getArrival_date() + " -- " + flight.getArrival_time() + "\n"
				+ "\n\n Thank you for choosing us.";		
		systemService.sendEmail(toEmail, subject, body);
		

				
	}
}
