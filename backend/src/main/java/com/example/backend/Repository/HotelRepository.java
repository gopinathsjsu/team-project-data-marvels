package com.example.backend.Repository;

import com.example.backend.Models.Hotels;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HotelRepository extends JpaRepository<Hotels, Integer> {
    List<Hotels> findByCity(String city);
}
