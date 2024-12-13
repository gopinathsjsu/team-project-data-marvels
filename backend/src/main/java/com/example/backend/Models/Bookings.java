package com.example.backend.Models;

import com.sun.org.apache.xpath.internal.operations.Bool;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
public class Bookings {
    @Id
    @Column(name = "bookingid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bookingid;

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

    private Integer numberofguests;

    private Integer numberofrooms;

}

