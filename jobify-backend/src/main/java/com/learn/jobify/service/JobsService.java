package com.learn.jobify.service;

import com.learn.jobify.entity.JobsEntity;
import com.learn.jobify.entity.RecruiterEntity;
import com.learn.jobify.models.Jobs;
import com.learn.jobify.models.Response;
import com.learn.jobify.repository.JobsRepository;
import com.learn.jobify.repository.RecruiterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

import static com.learn.jobify.service.UserService.SUCCESS;
@Service
@RequiredArgsConstructor
public class JobsService {
    private final JobsRepository jobsRepository;
    private final RecruiterRepository recruiterRepository;

    public Response postJob(String userName, Jobs job){
        Response response = new Response("","");
        Optional<RecruiterEntity> recruiter = recruiterRepository.findByUserName(userName);

        JobsEntity jobsEntity = JobsEntity.builder()
                .recruiter(recruiter.orElse(null))
                .title(job.getTitle())
                .description(job.getDescription())
                .location(job.getLocation())
                .experienceLevel(job.getExperienceLevel())
                .experienceYear(job.getExperienceYear())
                .status("open")
                .createdAt(Instant.now())
                .build();

        jobsRepository.save(jobsEntity);
        response.setStatus(SUCCESS);
        response.setMessage("Job posted successfully");
        return response;
    }

    public Long jobCount(String userName){
        return jobsRepository.countByRecruiter_UserName(userName);
    }

    public List<JobsEntity> allJobs(String userName){
        return jobsRepository.findByRecruiter_UserName(userName);
    }
}
