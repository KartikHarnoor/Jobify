package com.learn.jobify.service;

import com.learn.jobify.entity.JobsEntity;
import com.learn.jobify.repository.JobsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RecruiterService {

    private final JobsRepository jobsRepository;
    public List<JobsEntity> fetchAllJobs(String username) {
        return jobsRepository.findByRecruiter_UserName(username);
    }

}
