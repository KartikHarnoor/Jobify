package com.learn.jobify.models;

import lombok.*;

import java.time.Instant;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Signup {

    public String userName;
    public String passwordHash;
    public String fullName;
    public String email;
    public String phone;
    public LocalDate dob;
    public String gender;
    public Instant createdAt;
    public String type;
    public String companyName;
}


