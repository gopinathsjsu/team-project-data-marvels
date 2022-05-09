package com.example.backend.Controller;

import com.example.backend.ModelDTO.HotelDTO;
import com.example.backend.Models.Hotels;
import com.example.backend.Repository.HotelRepository;
import jdk.vm.ci.meta.Local;
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

//    @GetMapping(value = "/getHotels")
//    public List<Map<String, Object>> getHotels(@RequestParam(value = "city") String city,
//                                  @RequestParam(value = "startdate") @DateTimeFormat(pattern="yyyy-MM-dd") LocalDate start,
//                                  @RequestParam(value = "enddate") @DateTimeFormat(pattern="yyyy-MM-dd") LocalDate end) {
//        return hotelRepository.findnewhotels(city, start, end);
//    }

    @GetMapping(value = "/{hotelid}")
    public Optional<Hotels> getHotelByID(@QueryParam(value = "hotelid") Integer hotelid) {
        Map<String, Object> map = new HashMap<>();
        map.put("status", 0);
        map.put("data", hotelRepository.findById(hotelid));
        return hotelRepository.findById(hotelid);
    }

    @GetMapping
    public List<Map<String, Object>> getHotelsByCity(@RequestParam(value = "city", required = false) String city,
                                          @RequestParam(value = "startdate", required = false) @DateTimeFormat(pattern="yyyy-MM-dd") LocalDate start,
                                          @RequestParam(value = "enddate", required = false) @DateTimeFormat(pattern="yyyy-MM-dd") LocalDate end) {
//        return hotelRepository.findByCity(city);
        if(city == null) {
            System.out.println("hi");
        }
        LocalDate s = start == null ? LocalDate.now() : start;
        LocalDate e = end == null ? LocalDate.now() : end;
        List<Map<String, Object>> c = city == null ? hotelRepository.findAvailableHotelsWithoutCity(s, e)
                : hotelRepository.findAvailableHotelsBycity(city,s,e);


//        List<Map<String, Object>> c = hotelRepository.findnewhotels(city,start,end);
//        Boolean cc = start.getDayOfWeek() == Calendar.SATURDAY || start.getDayOfWeek() == Calendar.SUNDAY;

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
//        hotel.setActive(true);
        return hotelRepository.save(hotel);
    }

    @DeleteMapping
    public String deleteHotel(@QueryParam(value = "hotelid") Integer hotelid) {
        Hotels hotels = hotelRepository.getById(hotelid);
        hotels.setActive(false);
        hotelRepository.save(hotels);
        return "Successfully deleted the hotel";
    }
}
