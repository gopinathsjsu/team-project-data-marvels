package com.example.backend.Models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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

//    @OneToMany(targetEntity=Rooms.class, mappedBy="hotelid", fetch= FetchType.EAGER)
//    private List<Rooms> roomsList;
}
