package com.example.backend.Controller;

import com.example.backend.ModelDTO.BookingDTO;
import com.example.backend.Models.Bookings;
import com.example.backend.Models.Users;
import com.example.backend.Repository.BookingsRepository;
import com.example.backend.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.QueryParam;
import java.util.List;

@CrossOrigin
@RestController
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
    public void saveBooking(@RequestBody BookingDTO booking) {
        Users user = usersRepository.findById(booking. getUserid()).get();
        Double spend = 0.0;
        Double gain = 0.0;

        if(user.getMembertype().equals("Silver")) {
            if(booking.getPaymenttype().equals("points")) {
                spend =  booking.getRoomprice();
                gain = (booking.getRoomprice() / 150) * 4;
                user.setRewards(user.getRewards() - spend + gain);
            }
            else{
                gain = booking.getRoomprice() * 4;
                user.setRewards(user.getRewards() + gain);
            }
            if(user.getRewards() > 60000) {
                user.setMembertype("Gold");
            }
        }
        else if (user.getMembertype().equals("Gold")) {
//            spend =  booking.getRoomprice() * 125;
//            gain = booking.getRoomprice()*1.5;

            if(booking.getPaymenttype().equals("points")) {
                spend =  booking.getRoomprice();
                gain = (booking.getRoomprice() / 125) * 7.5;
                user.setRewards(user.getRewards() - spend + gain);
            }
            else{
                gain = booking.getRoomprice() * 7.5;
                user.setRewards(user.getRewards() + gain);
            } //73260, 53460, 56610 ->

            if(user.getRewards() > 100000) {
                user.setMembertype("Platinum");
            }
        }
        else {
//            spend =  booking.getRoomprice() * 100;
//            gain = booking.getRoomprice()*2;

            if(booking.getPaymenttype().equals("points")) {
                spend =  booking.getRoomprice();
                gain = (booking.getRoomprice() / 100) * 10;
                user.setRewards(user.getRewards() - spend + gain);
            }
            else{
                gain = booking.getRoomprice() * 10;
                user.setRewards(user.getRewards() + gain);
            }
        }
//        if(booking.getPaymenttype() == "points") {
//            user.setRewards(user.getRewards() - spend + gain);
//        }
//        else{
//            user.setRewards(user.getRewards() + gain);
//        }

        usersRepository.save(user);
        Bookings bookings = new Bookings();

        bookings.setUserid(booking.getUserid());
        bookings.setHotelid(booking.getHotelid());
        bookings.setRoomid(booking.getRoomid());
        bookings.setRoomtypeid(booking.getRoomtypeid());
        bookings.setPaymenttype(booking.getPaymenttype());
        bookings.setStartDate(booking.getStartDate());
        bookings.setEndDate(booking.getEndDate());
        bookings.setRoomprice(booking.getRoomprice());
        bookings.setStatus(booking.getStatus());
        bookings.setActive(true);
        bookings.setContinentalbreakfast(booking.getContinentalbreakfast());
        bookings.setFitnessRoom(booking.getFitnessRoom());
        bookings.setParking(booking.getParking());
        bookings.setMeals(booking.getMeals());
        bookings.setSwimmingpool(booking.getSwimmingpool());

//        return bookingsRepository.save(bookings);
    }

    @PostMapping(value = "/update")
    public Bookings updateBooking(@RequestBody Bookings bookings) {
        return bookingsRepository.save(bookings);
    }

    @DeleteMapping(value = "/{bookingid}")
    public String deleteBooking(@QueryParam(value = "bookingid") Integer bookingid) {
        Bookings bookings = bookingsRepository.getById(bookingid);
        bookings.setActive(false);
        bookingsRepository.save(bookings);
        return "Booking cancelled successfully";
    }
}
