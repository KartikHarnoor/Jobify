package com.learn.jobify.service;

import com.learn.jobify.entity.RecruiterEntity;
import com.learn.jobify.models.*;
import com.learn.jobify.entity.SignupEntity;
import com.learn.jobify.entity.JobSeekerEntity;
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
    public static final String SUCCESS = "success";
    public static final String FAIL = "fail";

    public Response registerUser(Signup signup) {
        Response response = new Response("","");
        if((signupRepository.existsByUserName(signup.getUserName())))
        {
            response.setStatus(FAIL);
            response.setMessage("Username already exists");
            return response;

        }
        if((signupRepository.existsByEmail(signup.getEmail()))){
            response.setStatus(FAIL);
            response.setMessage("Email already exists");
            return response;

        }
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
            response.setStatus(SUCCESS);
            response.setMessage("User registered");
            return response;
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
            response.setStatus(SUCCESS);
            response.setMessage("User registered");
            return response;
        }
        response.setStatus(SUCCESS);
        response.setMessage(SUCCESS);
        return response;

    }
    public Response loginUser(Login login){
        String user= login.username;
        String pass=login.password;
        Response response = new Response("","");
        if((!user.isEmpty() && (!pass.isEmpty()))){
            Optional<SignupEntity> signupEntity=signupRepository.findByUserNameAndPasswordHash(login.username, login.password);
            if(signupEntity.isEmpty()) {
                response.setStatus(FAIL);
                response.setMessage("Invalid Credentials");
                return response;
            }
        }
        else{
            response.setStatus(FAIL);
            response.setMessage("Enter username and password");
            return response;
        }
        response.setStatus(SUCCESS);
        response.setMessage("User verified");
        return response;

    }
    public Response registerJobSeeker(JobSeeker jobSeeker) {
        Response response = new Response("","");

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
        jobSeekerRepository.save(jobSeekerEntity);
        response.setStatus(SUCCESS);
        response.setMessage("Job seeker registered");
        return response;
    }

    public Response registerRecruiter(Recruiter recruiter){
        Response response = new Response("","");
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

        response.setStatus(SUCCESS);
        response.setMessage("Recruiter registered");
        return response;
    }

    public Optional<RecruiterEntity> getInfoRecruiter(String userName){
        return recruiterRepository.findByUserName(userName);
    }

    public Optional<JobSeekerEntity> getInfoJobseeker(String userName){
        return jobSeekerRepository.findByUserName(userName);
    }
}
