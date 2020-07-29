package com.example.controller;


import com.example.persistance.entity.Exam;
import com.example.service.function.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TeacherController {

    @Autowired
    TeacherService teacherService;

    @GetMapping("/teacher/exams")
    public List<Exam> findExams() {

        return teacherService.getExams();
    }

    @PostMapping("/teacher/add/exam")
    public Exam addExam(@RequestBody Exam exam) {
        return teacherService.createExam(exam);
    }
}
