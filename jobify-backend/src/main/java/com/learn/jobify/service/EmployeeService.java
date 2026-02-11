package com.learn.jobify.service;
import com.learn.jobify.entity.JobApplicationEntity;
import com.learn.jobify.entity.JobSeekerEntity;
import com.learn.jobify.entity.JobsEntity;
import com.learn.jobify.models.Response;
import com.learn.jobify.repository.JobApplicationRepository;
import com.learn.jobify.repository.JobSeekerRepository;
import com.learn.jobify.repository.JobsRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final JobApplicationRepository jobApplicationRepository;
    private final JobSeekerRepository jobSeekerRepository;
    private final JobsRepository jobsRepository;
    @Transactional
    public Response applyJob(Long jobId, String username) {

        Response response = new Response("","");

        // 1️⃣ Fetch job seeker
        JobSeekerEntity seeker = jobSeekerRepository
                .findByUserName(username)
                .orElseThrow(() -> new RuntimeException("Job seeker not found"));

        // 2️⃣ Fetch job
        JobsEntity job = jobsRepository
                .findById(jobId)
                .orElseThrow(() -> new RuntimeException("Job not found"));

        // 3️⃣ Check duplicate application
        boolean alreadyApplied = jobApplicationRepository
                .existsByJob_IdAndApplicant_Id(jobId, seeker.getId());
        // 4⃣ Check if application is closed
        boolean checkClosed = jobApplicationRepository
                .existsByIdAndStatus(jobId,"closed");

        if (alreadyApplied) {
            response.setStatus("fail");
            response.setMessage("Already applied for this job");
            return response;
        }

        if(checkClosed){
            response.setStatus("fail");
            response.setMessage("Sorry, this job application is no longer accepting any applications");
            return response;
        }

        // 4️⃣ Save application
        JobApplicationEntity application = new JobApplicationEntity();
        application.setJob(job);
        application.setApplicant(seeker);
        application.setStatus("Applied");
        application.setAppliedAt(LocalDateTime.now());
        jobApplicationRepository.save(application);
        response.setStatus("success");
        response.setMessage("Job application received");
        return response;
    }
}
