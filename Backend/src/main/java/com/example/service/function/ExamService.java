package com.example.service.function;

import com.example.persistance.entity.Exam;
import com.example.persistance.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamService {
    @Autowired
    private ExamRepository examRepository;

    public List<Exam> getExams() {

        return examRepository.findAll();
    }

    public Exam createExam(Exam exam) {

        return examRepository.save(exam);
    }

    public Exam updateExam(Exam exam) {
        Exam existingExam = examRepository.findById((long) exam.getId()).orElse(exam);
        existingExam.setId(exam.getId());
        existingExam.setDate(exam.getDate());
        existingExam.setSeats(exam.getSeats());
        existingExam.setYearOfStudy(exam.getYearOfStudy());
        existingExam.setSemester(exam.getSemester());
        existingExam.setAcademycYear(exam.getAcademycYear());
        return examRepository.save(existingExam);
    }

    public Exam deleteExam(int id) {
        examRepository.deleteById((long) id);
        return (Exam) examRepository.findAll();
    }
}
