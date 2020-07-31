package com.example.service.function;

import com.example.persistance.entity.Exam;
import com.example.persistance.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentsService {

    @Autowired
    private ExamRepository examRepository;

    public List<Exam> getExams() {
        return examRepository.findAll();
    }

    public List<Exam> findByYoS(int yearOfStudy){
        return (List<Exam>) examRepository.findByYearOfStudy(yearOfStudy);
    }

    public List<Exam> findByFaculty(String faculty) {
        return (List<Exam>) examRepository.findByFaculty(faculty);
    }
}
