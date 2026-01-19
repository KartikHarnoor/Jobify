package com.learn.jobify.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.time.LocalDate;

@Entity
@Table(name = "recruiters", schema = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecruiterEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "full_name", length = 100, nullable = false)
    private String fullName;

    @Column(length = 100)
    private String designation;

    @Column(length = 15)
    private String phone;

    @Column(length = 100, nullable = false, unique = true)
    private String email;

    @Column(name = "company_name", length = 150, nullable = true)
    private String companyName;

    @Column(name = "company_url")
    private String companyUrl;

    @Column(name="dob")
    private LocalDate dob;

    @Column(name = "company_size", length = 50)
    private String companySize;

    @Column(name = "industry_type", length = 100)
    private String industryType;

    @Column(name = "company_address")
    private String companyAddress;

    @Column(length = 100)
    private String city;

    @Column(length = 100)
    private String country;

    @Column(name = "gst_number", length = 20, unique = true)
    private String gstNumber;

    @Column(name = "gender")
    private String gender;

    @Column(name="username",length = 50, nullable = false, unique = true)
    private String userName;

    @Column(name = "password_hash", nullable = false)
    private String passwordHash;

    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @Column(name = "updated_at")
    private Instant updatedAt;



    @PrePersist
    protected void onCreate() {
        createdAt = Instant.now();
        updatedAt = Instant.now();
    }
}

