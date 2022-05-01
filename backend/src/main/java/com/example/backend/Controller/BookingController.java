package com.example.backend.Controller;

import com.example.backend.Models.Bookings;
import com.example.backend.Repository.BookingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/api/booking")
public class BookingController {

    @Autowired
    BookingsRepository bookingsRepository;

    @GetMapping("/userid")
    public List<Bookings> getBookingsByUserid(@RequestParam(value = "userid") Integer userid) {
        return bookingsRepository.findByUserid(userid);

    }

    @PostMapping
    public Bookings saveBooking(@RequestBody Bookings booking) {
        return bookingsRepository.save(booking);
    }
}
