package com.juan.backend.usersapp.domain.services;

import com.juan.backend.usersapp.domain.dto.UserDto;
import com.juan.backend.usersapp.domain.models.UserModel;
import com.juan.backend.usersapp.persistence.entity.UserEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import java.util.List;

@Service
public interface IUserService {

    ResponseEntity<List<UserDto>> getAllUsers();
    ResponseEntity<UserDto> getUserById(Long id);

    ResponseEntity<UserDto> saveUser(UserEntity user, BindingResult result);
    ResponseEntity<?> updateUserById(UserModel user, BindingResult result, Long id);

    ResponseEntity<?> removeUser(Long id);

}
