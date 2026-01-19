package com.learn.jobify.controller;

import com.learn.jobify.entity.JobSeekerEntity;
import com.learn.jobify.entity.RecruiterEntity;
import com.learn.jobify.models.JobSeeker;
import com.learn.jobify.models.Login;
import com.learn.jobify.models.Recruiter;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.learn.jobify.service.UserService;
import com.learn.jobify.models.Signup;

@AllArgsConstructor
@RestController
@RequestMapping("")
public class UserController {

    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody Signup signup) {
        userService.registerUser(signup);
        return ResponseEntity.ok("User registered");
    }

    @PostMapping("/login")
    public ResponseEntity<String> signup(@RequestBody Login login) {
        try {
            String loginResult=userService.loginUser(login);
            return ResponseEntity.ok(loginResult);
        }
        catch (Exception e){
            throw e;
        }

    }


    @PostMapping("/register/jobseeker")
    public ResponseEntity<String> RegisterAsJobSeeker(@RequestBody JobSeeker jobSeeker){
        userService.registerJobSeeker(jobSeeker);
        return ResponseEntity.ok("Job Seeker Profile completed");
    }

    @PostMapping("/register/recruiter")
    public ResponseEntity<String> RegisterAsEmployer(@RequestBody Recruiter recruiter){
        userService.registerRecruiter(recruiter);
        return ResponseEntity.ok("Recruiter Profile completed");
    }


}
