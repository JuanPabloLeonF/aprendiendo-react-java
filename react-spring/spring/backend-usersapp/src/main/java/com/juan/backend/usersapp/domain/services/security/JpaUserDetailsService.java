package com.juan.backend.usersapp.domain.services.security;

import com.juan.backend.usersapp.persistence.entity.Role;
import com.juan.backend.usersapp.persistence.entity.UserEntity;
import com.juan.backend.usersapp.persistence.repository.IUserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class JpaUserDetailsService implements UserDetailsService {

    private final IUserRepository iUserRepository;

    public JpaUserDetailsService(IUserRepository iUserRepository) {
        this.iUserRepository = iUserRepository;
    }


    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<UserEntity> userFind = iUserRepository.findByUserName(username);

        if(!userFind.isPresent()) {
            throw new UsernameNotFoundException(username + " no existe en el sistema");
        } else {

            UserEntity userEntity = userFind.orElseThrow();
            List<GrantedAuthority> authorities = userEntity.getRoles()
                    .stream()
                    .map(role -> new SimpleGrantedAuthority(role.getName()))
                    .collect(Collectors.toList());

            return new User(
                userEntity.getUserName(),
                userEntity.getPassword(),
                true,
                true,
                true,
                true,
                authorities
            );
        }
    }
}
