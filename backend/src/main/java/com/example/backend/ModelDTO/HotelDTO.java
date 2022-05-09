package com.example.backend.ModelDTO;

import lombok.*;

import javax.persistence.Id;

@Getter
@Setter
public class HotelDTO {

    private String hotelname;

    private String address;

    private String country;

    private String city;

    private String state;
}
