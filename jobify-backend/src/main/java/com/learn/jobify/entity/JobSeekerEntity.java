package com.learn.jobify.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;
import java.util.Map;

@Entity
@Table(name = "job_seekers", schema = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JobSeekerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", length = 50, nullable = false, unique = true)
    private String userName;

    @Column(name = "password_hash", nullable = false)
    private String passwordHash;

    @Column(name = "full_name", length = 100, nullable = false)
    private String fullName;

    @Column(length = 100, nullable = false, unique = true)
    private String email;

    @Column(length = 15)
    private String phone;

    private LocalDate dob;

    @Column(length = 10)
    private String gender;

    @Column(name = "current_location", length = 100)
    private String currentLocation;

    @JdbcTypeCode(SqlTypes.ARRAY)
    @Column(name = "preferred_locations", columnDefinition = "text[]")
    private String[] preferredLocations;

    @Column(name = "current_job_title", length = 100)
    private String currentJobTitle;

    @Column(name = "experience_years", precision = 4, scale = 1)
    private BigDecimal experienceYears;

    @JdbcTypeCode(SqlTypes.ARRAY)
    @Column(columnDefinition = "text[]")
    private String[] skills;

    @Column(name = "highest_qualification", length = 100)
    private String highestQualification;

    @Column(name = "expected_salary")
    private Integer expectedSalary;

    @Column(name = "job_type", length = 50)
    private String jobType;

    @Column(name = "resume_url")
    private String resumeUrl;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "profile_urls", columnDefinition = "jsonb")
    private Map<String, Object> profileUrls;

    @Column(name = "created_at", updatable = false)
    private Instant createdAt;
}

