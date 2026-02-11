package com.learn.jobify.repository;

import com.learn.jobify.entity.JobApplicationEntity;
import com.learn.jobify.entity.JobSeekerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
    public interface JobApplicationRepository extends JpaRepository<JobApplicationEntity, Long> {
        boolean existsByJob_IdAndApplicant_Id(Long jobId, Long applicantId);
        boolean existsByIdAndStatus(Long jobId, String status);
}
