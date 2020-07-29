package com.example.controller;

import com.example.persistance.entity.Exam;
import com.example.service.function.StudentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StudentsController {

    @Autowired
    StudentsService studentsService;

    @GetMapping("/students/exams")
    public List<Exam> findExams() {

        return studentsService.getExams();
    }

    @GetMapping("/students/exam/{name}")
    public Exam findByNameCourse(@PathVariable String name) {

        return studentsService.findExamName(name);
    }
}
