package com.learn.jobify.controller;
import com.learn.jobify.models.Response;
import com.learn.jobify.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController

@RequestMapping("/employee")
public class EmployeeController {
    private final EmployeeService employeeService;
    @PostMapping("/apply/{jobId}/{username}")     //applicants username
    public ResponseEntity<Response> applyJob(
            @PathVariable Long jobId,
            @PathVariable String username) {
        Response response = employeeService.applyJob(jobId, username);
        if(response.getStatus().equals("fail")){
            return ResponseEntity.badRequest().body(response);
        }
        return ResponseEntity.ok(response);
    }

}
