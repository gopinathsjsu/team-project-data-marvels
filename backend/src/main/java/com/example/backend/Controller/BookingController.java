package com.example.backend.Controller;

import com.example.backend.Models.Bookings;
import com.example.backend.Models.Users;
import com.example.backend.Repository.BookingsRepository;
import com.example.backend.Repository.UsersRepository;
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

    @Autowired
    UsersRepository usersRepository;

    @GetMapping("/userid")
    public List<Bookings> getBookingsByUserid(@RequestParam(value = "userid") Integer userid) {
        return bookingsRepository.findByUserid(userid);

    }

    @PostMapping
    public Bookings saveBooking(@RequestBody Bookings booking) {
        Users user = usersRepository.getById(booking. getUserid());
        Double spend = 0.0;
        Double gain = 0.0;

        if(user.getMembertype() == "silver") {
            spend =  booking.getRoomprice() * 150;
            gain = booking.getRoomprice();

            if(user.getRewards() + gain > 60000) {
                user.setMembertype("gold");
            }
        }
        else if (user.getMembertype() == "gold") {
            spend =  booking.getRoomprice() * 125;
            gain = booking.getRoomprice()*1.5;
            if(user.getRewards()  + gain > 100000) {
                user.setMembertype("platinum");
            }
        }
        else {
            spend =  booking.getRoomprice() * 100;
            gain = booking.getRoomprice()*2;

        }
        if(booking.getPaymenttype() == "points") {
            user.setRewards(user.getRewards() - spend + gain);
        }
        else{
            user.setRewards(user.getRewards() + gain);
        }

        usersRepository.save(user);
        return bookingsRepository.save(booking);
    }

}
