package com.juan.backend.usersapp.persistence.mapper;

import com.juan.backend.usersapp.domain.dto.UserDto;
import com.juan.backend.usersapp.persistence.entity.UserEntity;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface IUserMapper {

    @Mappings(value = {
            @Mapping(source = "userDto.id", target = "id"),
            @Mapping(source = "userDto.userName", target = "userName"),
            @Mapping(source = "userDto.email", target = "email"),
            @Mapping(target = "password", ignore = true),
            @Mapping(target = "roles", ignore = true),
            @Mapping(source = "userDto.admin", target = "admin")
    })
    UserEntity userDtoToUserEntity(UserDto userDto);

    @InheritInverseConfiguration
    UserDto userEntityToUserDto(UserEntity userEntity);
}
