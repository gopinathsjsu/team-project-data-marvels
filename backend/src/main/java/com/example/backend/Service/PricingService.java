package com.example.backend.Service;

import java.time.LocalDate;
import java.util.*;

public class PricingService {

    private List<LocalDate> holidays = Arrays.asList(LocalDate.of(2022, 12,25),
            LocalDate.of(2023, 1,1),
            LocalDate.of(2022, 10,31),
            LocalDate.of(2022, 11,24));


    public List<Map<String, Object>> calculatePricing(List<Map<String, Object>> rooms, LocalDate start, LocalDate end) {

//        if(start.getDayOfWeek().toString().equals("SATURDAY") || start.getDayOfWeek().toString().equals("SUNDAY")){
//            System.out.println(start.getDayOfWeek());

//        }
        return priceHelper(rooms,  start, end);
//        Map<String, Object> hotel = rooms.get(0);
//        System.out.println(hotel.get("roomprice"));
//        return rooms;
    }

    public List<Map<String, Object>> priceHelper(List<Map<String, Object>> rooms, LocalDate start, LocalDate end) {
        List<Map<String, Object>> updatedRooms = new ArrayList<>();
        for(Map<String, Object> hotel: rooms) {
            Map<String, Object> newMap = new HashMap<>(hotel);
            Float price = (Float)hotel.get("roomprice");
            Double totalPrice = 0.0;
            for(LocalDate date = start; date.isBefore(end); date = date.plusDays(1)){
                if(holidays.contains(date)) {
                    totalPrice = totalPrice + price * 1.75;
                }
                else if(date.getDayOfWeek().toString().equals("SATURDAY") || date.getDayOfWeek().toString().equals("SUNDAY")){
                    totalPrice = totalPrice + price * 1.25;
                }
                else {
                    totalPrice = totalPrice + price;
                }
            }

            newMap.put("roomprice", totalPrice );
            updatedRooms.add(newMap);
        }
        return updatedRooms;
    }
}
