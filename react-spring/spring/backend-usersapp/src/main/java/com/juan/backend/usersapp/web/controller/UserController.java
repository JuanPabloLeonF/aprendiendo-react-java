package com.juan.backend.usersapp.web.controller;

import com.juan.backend.usersapp.domain.dto.UserDto;
import com.juan.backend.usersapp.domain.models.UserModel;
import com.juan.backend.usersapp.domain.services.IUserService;
import com.juan.backend.usersapp.persistence.entity.UserEntity;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final IUserService iUserService;

    public UserController(IUserService iUserService) {
        this.iUserService = iUserService;
    }

    @GetMapping("/getall")
    public ResponseEntity<List<UserDto>> getAll() {
        return iUserService.getAllUsers();
    }

    @GetMapping("/getbyid/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("id") Long id) {
        return iUserService.getUserById(id);
    }

    @PostMapping("/save")
    public ResponseEntity<UserDto> saveUser(@Valid @RequestBody UserEntity user, BindingResult result) {
        return iUserService.saveUser(user, result);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateUserById(@Valid @RequestBody UserModel user, BindingResult result, @PathVariable("id") Long id) {
        return iUserService.updateUserById(user, result, id);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> removeUser(@PathVariable("id") Long id) {
        return iUserService.removeUser(id);
    }


}
