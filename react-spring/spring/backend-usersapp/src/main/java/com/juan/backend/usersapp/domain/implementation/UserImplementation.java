package com.juan.backend.usersapp.domain.implementation;

import com.juan.backend.usersapp.domain.dto.UserDto;
import com.juan.backend.usersapp.domain.models.IUserIsAdmin;
import com.juan.backend.usersapp.domain.models.UserModel;
import com.juan.backend.usersapp.domain.services.IUserService;
import com.juan.backend.usersapp.persistence.entity.Role;
import com.juan.backend.usersapp.persistence.entity.UserEntity;
import com.juan.backend.usersapp.persistence.mapper.IUserMapper;
import com.juan.backend.usersapp.persistence.repository.IRoleRepository;
import com.juan.backend.usersapp.persistence.repository.IUserRepository;
import com.juan.backend.usersapp.persistence.validation.UserValidation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BindingResult;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserImplementation implements IUserService {

    private final IUserRepository iUserRepository;
    private final IRoleRepository iRoleRepository;
    private final PasswordEncoder passwordEncoder;
    private final IUserMapper iUserMapper;

    public UserImplementation(IUserRepository iUserRepository, IRoleRepository iRoleRepository, PasswordEncoder passwordEncoder, IUserMapper iUserMapper) {
        this.iUserRepository = iUserRepository;
        this.iRoleRepository = iRoleRepository;
        this.passwordEncoder = passwordEncoder;
        this.iUserMapper = iUserMapper;
    }

    @Override
    @Transactional(readOnly = true)
    public ResponseEntity<List<UserDto>> getAllUsers() {
        List<UserEntity> usersEntity = iUserRepository.findAll();

        List<UserDto> usersDto = usersEntity
                .stream()
                .map(iUserMapper::userEntityToUserDto)
                .toList();

        return new ResponseEntity<>(usersDto, HttpStatus.OK);
    }


    @Override
    @Transactional(readOnly = true)
    public ResponseEntity<UserDto> getUserById(Long id) {
        Optional<UserEntity> userOptional = iUserRepository.findById(id);

        if (userOptional.isPresent()) {
            UserDto userDto = iUserMapper.userEntityToUserDto(userOptional.get());
            return new ResponseEntity<>(userDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    @Transactional(readOnly = false)
    public ResponseEntity<UserDto> saveUser(UserEntity user, BindingResult result) {

        if(result.hasErrors()) {
            return (ResponseEntity<UserDto>) UserValidation.validation(result);
        }
        List<Role> roles = getRoles(user);
        user.setRoles(roles);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user = iUserRepository.save(user);
        UserDto userDto = iUserMapper.userEntityToUserDto(user);
        return new ResponseEntity<>(userDto, HttpStatus.CREATED);
    }

    @Override
    @Transactional(readOnly = false)
    public ResponseEntity<UserDto> updateUserById(UserModel user, BindingResult result, Long id) {

        if(result.hasErrors()) {
            return (ResponseEntity<UserDto>) UserValidation.validation(result);
        }

        Optional<UserEntity> userOptional = iUserRepository.findById(id);

        if (userOptional.isPresent()) {

            List<Role> roles = getRoles(user);

            UserEntity existingUser = userOptional.get();
            existingUser.setUserName(user.getUserName());
            existingUser.setEmail(user.getEmail());
            existingUser.setRoles(roles);
            existingUser.setAdmin(user.getAdmin());
            existingUser = iUserRepository.save(existingUser);
            UserDto userDto = iUserMapper.userEntityToUserDto(existingUser);
            return new ResponseEntity<>(userDto, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @Override
    @Transactional(readOnly = false)
    public ResponseEntity<?> removeUser(Long id) {

        Optional<UserEntity> user = iUserRepository.findById(id);

        if (user.isPresent()) {
            iUserRepository.deleteById(user.orElseThrow().getId());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    private List<Role> getRoles(IUserIsAdmin user) {
        List<Role> roles = new ArrayList<>();
        Optional<Role> roleUser = iRoleRepository.findByName("ROLE_USER");

        if(roleUser.isPresent()) {
            roles.add(roleUser.orElseThrow());
        }

        if (user.getAdmin()) {
            Optional<Role> roleAdmin = iRoleRepository.findByName("ROLE_ADMIN");
            if (roleAdmin.isPresent()) {
                roles.add(roleAdmin.orElseThrow());
            }
        }

        return roles;
    }
}
