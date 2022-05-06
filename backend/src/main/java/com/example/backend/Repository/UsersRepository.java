package com.example.backend.Repository;

import com.example.backend.Models.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users, Integer> {

    Users findByUsernameAndPass(String username, String pass);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
