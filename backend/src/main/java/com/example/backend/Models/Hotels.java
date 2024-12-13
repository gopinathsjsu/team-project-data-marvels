package com.example.backend.Models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Hotels {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer hotelid;

    private String hotelname;

    private String address;

    private String country;

    private String city;

    private String state;

    private Double stars;

    private Boolean active;

//    @OneToMany(targetEntity=Rooms.class, mappedBy="hotelid", fetch= FetchType.EAGER)
//    private List<Rooms> roomsList;
}
