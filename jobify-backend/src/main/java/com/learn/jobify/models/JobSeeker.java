package com.learn.jobify.models;

import lombok.*;
import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;
import java.util.Map;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class JobSeeker {

    public String userName;

    public String passwordHash;

    public String fullName;

    public String email;

    public String phone;

    public LocalDate dob;

    public String gender;

    public String currentLocation;

    public String[] preferredLocations;

    public String currentJobTitle;

    public BigDecimal experienceYears;

    public String[] skills;

    public String highestQualification;

    public Integer expectedSalary;

    public String jobType;

    public String resumeUrl;

    public Map<String, Object> profileUrls;

    public Instant createdAt;
}

