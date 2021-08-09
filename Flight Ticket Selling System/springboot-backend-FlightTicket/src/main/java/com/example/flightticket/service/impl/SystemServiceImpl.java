package com.example.flightticket.service.impl;

import java.lang.annotation.Annotation;
import java.sql.Date;
import java.util.List;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.flightticket.exception.ResourceNotFoundException;
import com.example.flightticket.model.Flight;
import com.example.flightticket.model.Ticket;
import com.example.flightticket.repository.FlightRepository;
import com.example.flightticket.repository.TicketRepository;
import com.example.flightticket.service.SystemService;

@Service
public class SystemServiceImpl implements SystemService{
	
	private FlightRepository flightRepository;
	private TicketRepository ticketRepository;
	
	private JavaMailSender mailSender;
	
	public SystemServiceImpl(FlightRepository flightRepository, TicketRepository ticketRepository, JavaMailSender mailSender) {
		super();
		this.flightRepository = flightRepository;
		this.ticketRepository = ticketRepository;
		this.mailSender = mailSender;
	}

	@Override
	public List<Flight> getAllFlights() {
		return flightRepository.findAll();
	}

	@Override
	public Flight createFlight(Flight flight) {
		return flightRepository.save(flight);
	}

	@Override
	public List<Flight> getFilteredFlights(String from_where, String to_where, Date first_departure_date,
			Date second_departure_date) {
		return flightRepository.getFilteredFlights(from_where, to_where, first_departure_date, second_departure_date);
	}

	@Override
	public Flight getFlightByID(Long id) {
		return flightRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Flight you search could not be found with id:" + id));
	}

	@Override
	public Flight updateFlight(Long id, Flight flight) {
		Flight existingFlight = flightRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Flight does not exist with id: "+ id));
		
		existingFlight.setFrom_where(flight.getFrom_where());
		existingFlight.setTo_where(flight.getTo_where());
		existingFlight.setDeparture_date(flight.getDeparture_date());
		existingFlight.setDeparture_time(flight.getDeparture_time());
		existingFlight.setArrival_date(flight.getArrival_date());
		existingFlight.setArrival_time(flight.getArrival_time());
		existingFlight.setTicket_price(flight.getTicket_price());
		existingFlight.setCurrent_passenger(flight.getCurrent_passenger());
		existingFlight.setTotal_capacity(flight.getTotal_capacity());
		existingFlight.setCompany_name(flight.getCompany_name());
		
		flightRepository.save(existingFlight);
		return existingFlight;
	}

	@Override
	public void deleteFlight(Long id) {
		flightRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Flight does not exist with id: "+ id));		
		
		flightRepository.deleteById(id);
	}
	
	@Override
	public List<Ticket> getAllTickets() {
		return ticketRepository.findAll();
	}

	@Override
	public Ticket createTicket(Ticket ticket) {
		return ticketRepository.save(ticket);
	}

	@Override
	public void sendEmail(String toEmail, String subject, String body) {
		SimpleMailMessage msg = new SimpleMailMessage();
		

		msg.setFrom("senderMailAdress@gmail.com");
		msg.setTo(toEmail);
		msg.setSubject(subject);
		msg.setText(body);
		
		mailSender.send(msg);
		
		System.out.println("Mail sent successfully!");
	}

	@Override
	public Ticket getTicketByID(Long tid) {
		return ticketRepository.findById(tid).orElseThrow(
				() -> new ResourceNotFoundException("Ticket you search could not be found with id:" + tid));
	}
	
	
}
