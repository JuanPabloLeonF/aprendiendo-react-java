package com.juan.backend.usersapp.domain.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserModel implements IUserIsAdmin{

    @NotBlank
    @Size(min = 4, max = 10)
    private String userName;

    @Email
    @NotBlank
    private String email;
    private Boolean admin;

    public UserModel() {
    }

    @Override
    public Boolean getAdmin() {
        return admin;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
