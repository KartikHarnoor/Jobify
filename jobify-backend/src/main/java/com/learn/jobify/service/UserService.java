package com.learn.jobify.service;

import com.learn.jobify.entity.RecruiterEntity;
import com.learn.jobify.models.JobSeeker;
import com.learn.jobify.entity.SignupEntity;
import com.learn.jobify.entity.JobSeekerEntity;
import com.learn.jobify.models.Login;
import com.learn.jobify.models.Recruiter;
import com.learn.jobify.models.Signup;
import com.learn.jobify.repository.JobSeekerRepository;
import com.learn.jobify.repository.RecruiterRepository;
import com.learn.jobify.repository.SignupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final SignupRepository signupRepository;
    private final JobSeekerRepository jobSeekerRepository;
    private final RecruiterRepository recruiterRepository;

    public void registerUser(Signup signup) {
        SignupEntity signupEntity = SignupEntity.builder()
                .userName(signup.getUserName())
                .passwordHash(signup.getPasswordHash())
                .fullName(signup.getFullName())
                .email(signup.getEmail())
                .phone(signup.getPhone())
                .dob(signup.getDob())
                .type(signup.getType())
                .gender(signup.getGender())
                .createdAt(Instant.now())
                .build();
        signupRepository.save(signupEntity);
        if(signup.getType().equals("Job Seeker")){
            JobSeekerEntity jobSeekerEntity = JobSeekerEntity.builder()
                    .userName(signup.getUserName())
                    .passwordHash(signup.getPasswordHash())
                    .fullName(signup.getFullName())
                    .email(signup.getEmail())
                    .phone(signup.getPhone())
                    .dob(signup.getDob())
                    .gender(signup.getGender())
                    .createdAt(Instant.now())
                    .build();
            jobSeekerRepository.save(jobSeekerEntity);
        }
        else if (signup.getType().equals("Employer")) {
            RecruiterEntity recruiterEntity = RecruiterEntity.builder()
                    .userName(signup.getUserName())
                    .passwordHash(signup.getPasswordHash())
                    .fullName(signup.getFullName())
                    .email(signup.getEmail())
                    .phone(signup.getPhone())
                    .dob(signup.getDob())
                    .gender(signup.getGender())
                    .companyName(signup.getCompanyName())
                    .createdAt(Instant.now())
                    .build();
            recruiterRepository.save(recruiterEntity);
        }

    }
    public String loginUser(Login login){
        String user= login.username;
        String pass=login.password;
        if((!user.isEmpty() && (!pass.isEmpty()))){
        Optional<SignupEntity> signupEntity=signupRepository.findByUserNameAndPasswordHash(login.username, login.password);
        if(signupEntity.isEmpty()) {
            return "Invalid Credentials";
        }
        }
        else{
            return "Enter username and password";
        }
        return "User verified";

    }
    public JobSeekerEntity registerJobSeeker(JobSeeker jobSeeker) {

        JobSeekerEntity jobSeekerEntity = jobSeekerRepository
                .findByUserName(jobSeeker.getUserName())
                .orElseGet(JobSeekerEntity::new);

        if (jobSeekerEntity.getId() == null) {
            jobSeekerEntity.setUserName(jobSeeker.getUserName());
            jobSeekerEntity.setCreatedAt(Instant.now());
        }

        jobSeekerEntity.setPasswordHash(jobSeeker.getPasswordHash());
        jobSeekerEntity.setFullName(jobSeeker.getFullName());
        jobSeekerEntity.setEmail(jobSeeker.getEmail());
        jobSeekerEntity.setPhone(jobSeeker.getPhone());
        jobSeekerEntity.setDob(jobSeeker.getDob());
        jobSeekerEntity.setGender(jobSeeker.getGender());
        jobSeekerEntity.setCurrentLocation(jobSeeker.getCurrentLocation());
        jobSeekerEntity.setPreferredLocations(jobSeeker.getPreferredLocations());
        jobSeekerEntity.setCurrentJobTitle(jobSeeker.getCurrentJobTitle());
        jobSeekerEntity.setExperienceYears(jobSeeker.getExperienceYears());
        jobSeekerEntity.setSkills(jobSeeker.getSkills());
        jobSeekerEntity.setHighestQualification(jobSeeker.getHighestQualification());
        jobSeekerEntity.setExpectedSalary(jobSeeker.getExpectedSalary());
        jobSeekerEntity.setJobType(jobSeeker.getJobType());
        jobSeekerEntity.setResumeUrl(jobSeeker.getResumeUrl());
        jobSeekerEntity.setProfileUrls(jobSeeker.getProfileUrls());
        return jobSeekerRepository.save(jobSeekerEntity);
    }

    public RecruiterEntity registerRecruiter(Recruiter recruiter){
        RecruiterEntity recruiterEntity = recruiterRepository.findByUserName(recruiter.getUserName())
                .orElseGet(RecruiterEntity::new);

        if (recruiterEntity.getId() == null) {
            recruiterEntity.setUserName(recruiter.getUserName());
            recruiterEntity.setCreatedAt(Instant.now());
        }

        recruiterEntity.setFullName(recruiter.getFullName());
        recruiterEntity.setEmail(recruiter.getEmail());
        recruiterEntity.setPhone(recruiter.getPhone());
        recruiterEntity.setDob(recruiter.getDob());
        recruiterEntity.setGender(recruiter.getGender());

        recruiterEntity.setDesignation(recruiter.getDesignation());
        recruiterEntity.setCompanyName(recruiter.getCompanyName());
        recruiterEntity.setCompanyUrl(recruiter.getCompanyUrl());
        recruiterEntity.setCompanySize(recruiter.getCompanySize());
        recruiterEntity.setIndustryType(recruiter.getIndustryType());
        recruiterEntity.setCompanyAddress(recruiter.getCompanyAddress());
        recruiterEntity.setCity(recruiter.getCity());
        recruiterEntity.setCountry(recruiter.getCountry());
        recruiterEntity.setGstNumber(recruiter.getGstNumber());
        recruiterEntity.setUpdatedAt(Instant.now());

        return recruiterRepository.save(recruiterEntity);
    }

}
