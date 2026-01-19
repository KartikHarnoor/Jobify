package com.learn.jobify.repository;

import com.learn.jobify.entity.JobSeekerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface JobSeekerRepository extends JpaRepository<JobSeekerEntity, Long>{
    Optional<JobSeekerEntity> findByUserName(String userName);
}
