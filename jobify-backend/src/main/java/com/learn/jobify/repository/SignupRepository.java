package com.learn.jobify.repository;

import com.learn.jobify.entity.SignupEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SignupRepository extends JpaRepository<SignupEntity, Long>{
    //Optional<SignupEntity> findByUserNameAndPasswordHash(String userName, String passwordHash);
    Optional<SignupEntity> findByUserName(String userName);
    boolean existsByUserName(String userName);
    boolean existsByEmail(String email);

}
