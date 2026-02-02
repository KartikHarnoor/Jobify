package com.learn.jobify.models;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Login {
    public String username;
    public String password;
}
