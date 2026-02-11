package com.learn.jobify.controller;
import com.learn.jobify.entity.JobsEntity;
import com.learn.jobify.service.RecruiterService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController

@RequestMapping("/recruiter")
public class RecruiterController {

    private final RecruiterService recruiterService;

    @GetMapping("/fetchAll/{username}")
    public ResponseEntity<List<JobsEntity>> fetchAllJobs(
            @PathVariable String username) {

        return ResponseEntity.ok(
                recruiterService.fetchAllJobs(username)
        );

    }
}
