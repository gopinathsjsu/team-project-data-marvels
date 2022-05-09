package com.example.backend.Controller;

import com.example.backend.ModelDTO.LoginRequest;
import com.example.backend.ModelDTO.SignupRequest;
import com.example.backend.Models.Users;
import com.example.backend.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("api/users")
public class UsersController {

    @Autowired
    private UsersRepository usersRepository;

    @GetMapping
    public List<Users> getAllUsers(){
        return usersRepository.findAll();
    }

    @PostMapping("/signin")
    public ResponseEntity getUserById(@RequestBody LoginRequest user){
        Users users = usersRepository.findByUsername(user.getUsername());
        if(!user.getPassword().equals(users.getPass())){
            return ResponseEntity.badRequest().body("Error: Invalid Credentials");
        }
        return users != null ? ResponseEntity.ok(users) : ResponseEntity.badRequest().body("Error: User Not Found");
    }

    @PostMapping("/signup")
    public ResponseEntity addUser(@RequestBody SignupRequest user) {
        if (usersRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body("Error: Username is already taken!");
        }
        if (usersRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body("Error: Email is already taken!");
        }

        Users newUser = new Users();
        newUser.setUsername(user.getUsername());
        newUser.setEmail(user.getEmail());
        newUser.setPhone(user.getPhonenumber());
        newUser.setUserrole("Customer");
        newUser.setPass(user.getPassword());
        newUser.setRewards(1000.0);
        newUser.setMembertype("Silver");
        Users s = usersRepository.save(newUser);
        return ResponseEntity.ok().body("Account creation success");
    }

    @DeleteMapping("/{userid}")
    public String deleteUserById(@RequestParam(value = "userid") Integer userid){
        Users users = usersRepository.getById(userid);
        users.setActive(false);
        usersRepository.deleteById(userid);
        return "User got deleted successfully";
    }
}
