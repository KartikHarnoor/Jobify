package com.learn.jobify.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.time.LocalDateTime;


@Entity
@Table(name = "jobs", schema = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JobsEntity {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "recruiter_id", nullable = false)
        private RecruiterEntity recruiter;

        @Column(nullable = false)
        private String title;

        @Column(columnDefinition = "TEXT")
        private String description;

        private String location;

        private String experienceLevel;   // JUNIOR / MID / SENIOR
        private String experienceYear;    // 0-2, 2-5, 5+


        private String status;

        private Instant createdAt;
    }

