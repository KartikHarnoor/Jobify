package com.learn.jobify.repository;

import com.learn.jobify.entity.RecruiterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface RecruiterRepository extends JpaRepository<RecruiterEntity, Long>{
    Optional<RecruiterEntity> findByUserName(String userName);

    //Optional<RecruiterEntity> findById(Long id);
}
