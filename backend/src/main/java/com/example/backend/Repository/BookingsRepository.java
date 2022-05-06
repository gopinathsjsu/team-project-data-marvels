package com.example.backend.Repository;

import com.example.backend.Models.Bookings;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingsRepository extends JpaRepository<Bookings, Integer> {

    List<Bookings> findByUserid(Integer userid);
}
