package com.learn.jobify.models;

import lombok.*;

import java.time.Instant;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Jobs {

        public Long id;
        public Long recruiterId;
        public String title;
        public String description;
        public String location;
        public String experienceLevel;   // JUNIOR / MID / SENIOR
        public String experienceYear;    // 0-2, 2-5, 5+
        public String status;             // OPEN / CLOSED
        public Instant createdAt;
}



