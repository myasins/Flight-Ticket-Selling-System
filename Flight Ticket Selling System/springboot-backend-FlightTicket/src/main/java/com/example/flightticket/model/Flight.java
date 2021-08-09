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
@Table(name="flight") 
public class Flight {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="flight_ID")
	private long flight_ID;
	
	@Column(name="from_where")
	private String from_where;
	
	@Column(name="to_where")
	private String to_where;
	
	@Column(name="departure_date")
	private Date departure_date;
	
	@Column(name="departure_time")
	private Time departure_time;
	
	@Column(name="arrival_date")
	private Date arrival_date;
	
	@Column(name="arrival_time")
	private Time arrival_time;
	
	@Column(name="ticket_price")
	private int ticket_price;
	
	@Column(name="total_capacity")
	private int total_capacity;
	
	@Column(name="current_passenger")
	private int current_passenger;
	
	@Column(name="company_name")
	private String company_name;
}
