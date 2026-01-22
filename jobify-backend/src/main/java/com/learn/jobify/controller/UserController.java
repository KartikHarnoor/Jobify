package com.learn.jobify.controller;

import com.learn.jobify.models.*;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.learn.jobify.service.UserService;

@AllArgsConstructor
@RestController
@RequestMapping("")
public class UserController {

    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<Response> signup(@RequestBody Signup signup) {
        Response response = userService.registerUser(signup);
        if("fail".contains(response.getStatus())){
            return ResponseEntity.badRequest().body(response);
        }
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<Response> login(@RequestBody Login login) {
        try {
            Response response = userService.loginUser(login);
            if("fail".contains(response.getStatus())){
                return ResponseEntity.badRequest().body(response);
            }
            return ResponseEntity.ok(response);
        }
        catch (Exception e){
            throw e;
        }

    }


    @PostMapping("/register/jobseeker")
    public ResponseEntity<Response> registerAsJobSeeker(@RequestBody JobSeeker jobSeeker){
        Response response = userService.registerJobSeeker(jobSeeker);
        if("fail".contains(response.getStatus())){
            return ResponseEntity.badRequest().body(response);
        }
        return ResponseEntity.ok(response);

    }

    @PostMapping("/register/recruiter")
    public ResponseEntity<Response> registerAsEmployer(@RequestBody Recruiter recruiter) {
        Response response = userService.registerRecruiter(recruiter);
        if ("fail".contains(response.getStatus())) {
            return ResponseEntity.badRequest().body(response);
        }
        return ResponseEntity.ok(response);
    }
}
