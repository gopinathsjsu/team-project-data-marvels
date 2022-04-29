package com.example.backend.Models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.List;

@Entity
@Data
public class Hotels {
    @Id
    private Integer hotelid;

    private String hotelname;

    private String address;

    private String country;

    private String city;

    private String state;

    private Float stars;

    private List<Rooms> roomsList;
}
