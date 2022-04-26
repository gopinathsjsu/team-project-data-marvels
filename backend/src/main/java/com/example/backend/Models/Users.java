package com.example.backend.Models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Users {
    @Id
    @Column(name = "userid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userid;

    private String username;

    private String email;

    private String phone;

    private Integer rewards;

    private String pass;

    private String userrole;
}
/*
create table users(
userid int IDENTITY(1,1) primary key,
username varchar(32),
email varchar(32),
phone varchar(16),
rewards int,
pass varchar(64),
userrole varchar(16)
);
*/
