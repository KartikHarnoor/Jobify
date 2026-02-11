package com.learn.jobify.controller;

import com.learn.jobify.entity.JobsEntity;
import com.learn.jobify.models.*;

import com.learn.jobify.service.JobsService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@AllArgsConstructor
@RestController

@RequestMapping("/jobs")
public class JobsController{

    private final JobsService jobsService;

    @PostMapping("/create")
    public ResponseEntity<Response> createJob(
                @RequestParam String userName,
                @RequestBody Jobs job) {
        Response response = jobsService.postJob(userName, job);
        if("fail".contains(response.getStatus())){
            return ResponseEntity.badRequest().body(response);
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping("/jobscount/{userName}")
    public ResponseEntity<Long> jobCount(@PathVariable String userName) {
        Long count = jobsService.jobCount(userName);
        return ResponseEntity.ok(count);
    }

    @GetMapping("/alljobs/{userName}")
    public ResponseEntity<List<JobsEntity>> allJobs(@PathVariable String userName) {
        List<JobsEntity> jobs= jobsService.allJobs(userName);
        return ResponseEntity.ok(jobs);
    }

    @GetMapping("/activejobscount/{userName}")
    public ResponseEntity<Long> activeJobCount(@PathVariable String userName) {
        Long count = jobsService.activeJobCount(userName);
        return ResponseEntity.ok(count);
    }


}
