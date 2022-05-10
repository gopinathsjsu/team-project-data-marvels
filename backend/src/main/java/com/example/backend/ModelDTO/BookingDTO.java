package com.example.backend.ModelDTO;

import lombok.Data;

import java.time.LocalDate;

@Data
public class BookingDTO {

    private Integer hotelid;

    private Integer roomtypeid;

    private Integer roomid;

    private Integer userid;

    private LocalDate startDate;

    private LocalDate endDate;

    private Double roomprice;

    private String paymenttype;

    private Boolean active;

    private String status;

    private Boolean continentalbreakfast;

    private Boolean swimmingpool;

    private Boolean meals;

    private Boolean parking;

    private Boolean fitnessRoom;
}
