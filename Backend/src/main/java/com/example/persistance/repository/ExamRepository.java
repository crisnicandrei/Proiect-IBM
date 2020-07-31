package com.example.persistance.repository;

import com.example.persistance.entity.Exam;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamRepository extends JpaRepository<Exam, Long> {
    Exam findByYearOfStudy(int yearOfStudy);
    Exam findByFaculty(String faculty);
}
