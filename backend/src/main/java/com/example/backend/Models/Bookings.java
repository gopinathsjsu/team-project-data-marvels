package com.example.backend.Models;

import lombok.Data;

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

    private Float roomprice;
}
