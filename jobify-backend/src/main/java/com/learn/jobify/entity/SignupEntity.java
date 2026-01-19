package com.learn.jobify.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.time.LocalDate;

@Entity
@Table(
        name = "signup",
        schema = "Users"
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SignupEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_name", length = 50, nullable = false)
    private String userName;

    @Column(name = "password_hash", nullable = false)
    private String passwordHash;

    @Column(name = "full_name", length = 100, nullable = false)
    private String fullName;

    @Column(name = "email", length = 100, nullable = false)
    private String email;

    @Column(name = "phone", length = 15)
    private String phone;

    @Column(name = "dob")
    private LocalDate dob;

    @Column(name = "gender", length = 10)
    private String gender;

    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @Column(name = "type", nullable = false)
    private String type;

}

