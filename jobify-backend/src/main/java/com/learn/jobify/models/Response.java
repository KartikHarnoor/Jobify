package com.learn.jobify.models;

import lombok.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Response {
    private String status;   // success / fail
    private String message;
}
