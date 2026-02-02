package com.learn.jobify.models;

import lombok.*;
import java.time.Instant;
import java.time.LocalDate;


@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Recruiter {

    public Long id;
    public String fullName;
    public String designation;
    public String phone;
    public String email;
    public String companyName;
    public String companyUrl;
    public LocalDate dob;
    public String companySize;
    public String industryType;
    public String companyAddress;
    public String city;
    public String country;
    public String gstNumber;
    public String gender;
    public String userName;
    public String passwordHash;
    public Instant createdAt;
    public Instant updatedAt;
    
}
