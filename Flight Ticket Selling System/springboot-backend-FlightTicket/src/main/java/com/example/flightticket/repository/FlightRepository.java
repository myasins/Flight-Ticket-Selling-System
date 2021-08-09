package com.example.flightticket.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.flightticket.model.Flight;

public interface FlightRepository extends JpaRepository<Flight, Long>{
	
	@Query(value = "SELECT * FROM flight AS f WHERE "
			+ "f.from_where LIKE :from_where AND "
			+ "f.to_where LIKE :to_where AND "
			+ "f.departure_date BETWEEN "
			+ ":first_departure_date AND :second_departure_date "
			, nativeQuery = true)
	public List<Flight> getFilteredFlights(
			@Param("from_where") String from_where,
			@Param("to_where") String to_where,
			@Param("first_departure_date") Date first_departure_date,
			@Param("second_departure_date") Date second_departure_date);
}
