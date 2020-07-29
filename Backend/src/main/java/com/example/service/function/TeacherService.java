package com.example.service.function;

import com.example.persistance.entity.Exam;
import com.example.persistance.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {

    @Autowired
    private ExamRepository examRepository;

    public List<Exam> getExams() {
        return examRepository.findAll();
    }

    public Exam createExam(Exam exam) {
        return examRepository.save(exam);
    }
}
