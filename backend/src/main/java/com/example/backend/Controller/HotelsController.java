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
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("api/hotels")
public class HotelsController {

    @Autowired
    private HotelRepository hotelRepository;

    @GetMapping
    public List<Hotels> getHotels() {
        return hotelRepository.findAll();
    }

    @GetMapping(value = "/{hotelid}")
    public Optional<Hotels> getHotelByID(@QueryParam(value = "hotelid") Integer hotelid) {
        return hotelRepository.findById(hotelid);
    }

    @GetMapping(value ="/hotels")
    public List<Map<String, Object>> getHotelsByCity(@RequestParam(value = "city") String city,
                                          @RequestParam(value = "startdate") @DateTimeFormat(pattern="yyyy-MM-dd") LocalDate start,
                                          @RequestParam(value = "enddate") @DateTimeFormat(pattern="yyyy-MM-dd") LocalDate end) {
//        return hotelRepository.findByCity(city);
        List<Map<String, Object>> c = hotelRepository.findnewhotels(city,start,end);
        System.out.println("hi");
        return c;
    }

    @PostMapping
    public Hotels addHotel(@RequestBody Hotels hotel) {
        return hotelRepository.save(hotel);
    }

    @DeleteMapping
    public String deleteHotel(@RequestParam(value = "hotelid") Integer hotelid) {
        hotelRepository.deleteById(hotelid);
        return "Successfully deleted the hotel";
    }
}
