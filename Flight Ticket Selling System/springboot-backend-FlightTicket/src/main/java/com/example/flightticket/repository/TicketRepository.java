package com.example.flightticket.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.flightticket.model.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long>{

}
