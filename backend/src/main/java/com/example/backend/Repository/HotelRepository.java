package com.example.backend.Repository;

import com.example.backend.ModelDTO.HotelDTO;
import com.example.backend.Models.Hotels;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

public interface HotelRepository extends JpaRepository<Hotels, Integer> {
    List<Hotels> findByCity(String city);
    @Query(value = "select h.*, r.roomid,r.roomtypeid, r.roomprice from hotels h\n" +
            "join rooms r on h.hotelid = r.hotelid where r.roomid not in (\n" +
            "select roomid from bookings b where ?2 between b.startDate and b.endDate " +
            "and ?3 between b.startDate and b.endDate) and city = ?1", nativeQuery = true)
    List<Map<String, Object>> findnewhotels(String city, LocalDate start, LocalDate end);

    @Query(value = "select h.*, r.roomid,r.roomtypeid, r.roomprice from hotels h\n" +
            "join rooms r on h.hotelid = r.hotelid where r.roomid not in (\n" +
            "select roomid from bookings b where ?1 between b.startDate and b.endDate " +
            "and ?2 between b.startDate and b.endDate)", nativeQuery = true)
    List<Map<String, Object>> findnewhotelsWithoutCity(LocalDate start, LocalDate end);
}
