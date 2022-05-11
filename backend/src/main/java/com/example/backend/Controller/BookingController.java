package com.example.backend.Controller;

import com.example.backend.ModelDTO.BookingDTO;
import com.example.backend.ModelDTO.UpdateBookingDTO;
import com.example.backend.Models.Bookings;
import com.example.backend.Models.Users;
import com.example.backend.Repository.BookingsRepository;
import com.example.backend.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.QueryParam;
import java.awt.print.Book;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/booking")
public class BookingController {

    @Autowired
    BookingsRepository bookingsRepository;

    @Autowired
    UsersRepository usersRepository;

    @GetMapping()
    public List<Map<String, Object>> getBookingsByUserid(@QueryParam(value = "userid") Integer userid) {
        return bookingsRepository.findBookingsByUserid(userid);
    }

    @GetMapping(value = "/all")
    public List<Map<String, Object>> getBookingsByHotel(@QueryParam(value = "userid") Integer userid) {
        Users user = usersRepository.findById(userid).get();
        List<Map<String, Object>> bookings = bookingsRepository.findAllBookingsHotelid(user.getHotelid());
        return bookings; // bookingsRepository.findBookingsByUserid(userid);
    }

    @PostMapping
    public Bookings saveBooking(@RequestBody BookingDTO booking) {
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
            }

            if(user.getRewards() > 100000) {
                user.setMembertype("Platinum");
            }
        }
        else {
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
        bookings.setNumberofguests(booking.getNumberofguests());
        bookings.setNumberofrooms(booking.getNumberofrooms());

        return bookingsRepository.save(bookings);
    }

    @PostMapping(value = "/update")
    public String updateBooking(@RequestBody UpdateBookingDTO ubDTO) {
        Bookings bookings = bookingsRepository.findById(ubDTO.bookingid).get();
        bookings.setStatus(ubDTO.getStatus());
        bookingsRepository.save(bookings);
        return ubDTO.getStatus() + " Successfully";
    }

    @DeleteMapping(value = "/{bookingid}")
    public String deleteBooking(@PathVariable(value = "bookingid") Integer bookingid) {
        Bookings bookings = bookingsRepository.findById(bookingid).get();
        bookings.setActive(false);
        bookingsRepository.save(bookings);
        return "Booking cancelled successfully";
    }
}
