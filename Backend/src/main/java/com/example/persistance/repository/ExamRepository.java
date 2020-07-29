package com.example.persistance.repository;

import com.example.persistance.entity.Admin;
import com.example.persistance.entity.Exam;
import com.example.persistance.entity.Students;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamRepository extends JpaRepository<Exam, Long> {
    Exam getByCourse(String nameCourse);
}
