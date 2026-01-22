package com.learn.jobify.models;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Response {
    private String status;   // success / fail
    private String message;
}
