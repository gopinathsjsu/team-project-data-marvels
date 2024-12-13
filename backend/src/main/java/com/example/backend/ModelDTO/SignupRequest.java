package com.example.backend.ModelDTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignupRequest {
    private String username;
    private String password;
    private String phonenumber;
    private String email;
}
