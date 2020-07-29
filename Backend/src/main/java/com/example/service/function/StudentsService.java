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
    public Exam findExamName(String name) {
        return examRepository.getByCourse(name);
    }

}
