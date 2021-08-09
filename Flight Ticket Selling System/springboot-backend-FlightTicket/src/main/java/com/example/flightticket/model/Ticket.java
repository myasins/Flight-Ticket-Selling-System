package com.example.flightticket.model;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="ticket") 
public class Ticket {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ticket_ID")
	private long ticket_ID;
	
	@Column(name="customer_name")
	private String customer_name;
	
	@Column(name="customer_mail")
	private String customer_mail;
	
	@Column(name="customer_ID")
	private String customer_ID;
	
	@Column(name="seat_number")
	private String seat_number;
	
	@Column(name="flight_ID")
	private long flight_ID;
	
}
