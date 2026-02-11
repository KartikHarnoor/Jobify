package com.learn.jobify.repository;
import com.learn.jobify.entity.JobsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface JobsRepository extends JpaRepository<JobsEntity, Long>{

    long countByRecruiter_UserName(String userName);
    List<JobsEntity> findByRecruiter_UserName(String userName);
    long countByRecruiter_UserNameAndStatus(String userName, String status);
    Optional<JobsEntity> findById(Long id);
}
