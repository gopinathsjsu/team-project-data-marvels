package com.example.backend.Controller;

import com.example.backend.ModelDTO.HotelDTO;
import com.example.backend.Models.Hotels;
import com.example.backend.Repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.QueryParam;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("api/hotels")
public class HotelsController {

    @Autowired
    private HotelRepository hotelRepository;

    @GetMapping(value = "/getHotels")
    public List<Hotels> getHotels() {
        return hotelRepository.findAll();
    }

    @GetMapping(value = "/{hotelid}")
    public Optional<Hotels> getHotelByID(@QueryParam(value = "hotelid") Integer hotelid) {
        Map<String, Object> map = new HashMap<>();
        map.put("status", 0);
        map.put("data", hotelRepository.findById(hotelid));
        return hotelRepository.findById(hotelid);
    }

    @GetMapping
    public List<Map<String, Object>> getHotelsByCity(@RequestParam(value = "city") String city,
                                          @RequestParam(value = "startdate") @DateTimeFormat(pattern="yyyy-MM-dd") LocalDate start,
                                          @RequestParam(value = "enddate") @DateTimeFormat(pattern="yyyy-MM-dd") LocalDate end) {
//        return hotelRepository.findByCity(city);
        List<Map<String, Object>> c = hotelRepository.findnewhotels(city,start,end);
//        Boolean cc = start.getDayOfWeek() == Calendar.SATURDAY || start.getDayOfWeek() == Calendar.SUNDAY;
        System.out.println("hi");
        return c;
    }

    @PostMapping
    public Hotels addHotel(@RequestBody HotelDTO hotelDTO) {
        Hotels hotel = new Hotels();
        hotel.setAddress(hotelDTO.getAddress());
        hotel.setHotelname(hotelDTO.getHotelname());
        hotel.setCity(hotelDTO.getCity());
        hotel.setState(hotelDTO.getState());
        hotel.setCountry(hotelDTO.getCountry());
        hotel.setStars(0.0);
        return hotelRepository.save(hotel);
    }

    @DeleteMapping
    public String deleteHotel(@RequestParam(value = "hotelid") Integer hotelid) {
        hotelRepository.deleteById(hotelid);
        return "Successfully deleted the hotel";
    }
}
