package com.example.backend.Controller;

import com.example.backend.Models.Rooms;
import com.example.backend.Repository.RoomsRepository;
import com.example.backend.Service.PricingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("api/rooms")
public class RoomsController {

    @Autowired
    private RoomsRepository roomsRepository;

    @GetMapping
    public List<Map<String, Object>> getRoomsByHotel(@RequestParam(value = "hotelid") Integer hotelid,
                                                     @RequestParam(value = "startdate", required = false)@DateTimeFormat(pattern="yyyy-MM-dd") LocalDate start,
                                                     @RequestParam(value = "endDate", required = false)@DateTimeFormat(pattern="yyyy-MM-dd") LocalDate end){
        LocalDate s = start == null ? LocalDate.now() : start;
        LocalDate e = end == null ? LocalDate.now().plusDays(1) : end;
        PricingService pricingService = new PricingService();
        List<Map<String, Object>> rooms = roomsRepository.findAvailableRoomsByHotel(hotelid, s, e);
        List<Map<String, Object>> updatedRooms = pricingService.calculatePricing(rooms, s, e);
        return updatedRooms;
    }

    @PostMapping
    public Rooms addRoom(@RequestBody Rooms room) {
        return roomsRepository.save(room);
    }

    @DeleteMapping
    public String deleteRoom(@RequestParam(value = "roomid") Integer roomid) {
        roomsRepository.deleteById(roomid);
        return "Successfully deleted the room";
    }
}
