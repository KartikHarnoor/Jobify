package com.learn.jobify.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

    @Entity
    @Table(
            name = "job_applications",
            schema = "users",
            uniqueConstraints = {
                    @UniqueConstraint(columnNames = {"job_id", "applicant_id"})
            }
    )
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public class JobApplicationEntity {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        // 🔹 Many applications belong to one job
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "job_id", nullable = false)
        private JobsEntity job;

        // 🔹 Many applications belong to one job seeker
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "applicant_id", nullable = false)
        private JobSeekerEntity applicant;

        @Column(name = "applied_at", nullable = false)
        private LocalDateTime appliedAt;

        @Column(name = "status", nullable = false)
        private String status;
    }
