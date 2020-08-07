package com.example.controller;

import com.example.persistance.entity.Exam;
import com.example.persistance.entity.Students;
import com.example.service.function.StudentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentsController {

    @Autowired
    StudentsService studentsService;

    @PostMapping("/addStudent")
    public Students createStudent(@RequestBody Students students) {

        return studentsService.createStudents(students);
    }

    @GetMapping("/students/exams")
    public List<Exam> findExams() {
        return studentsService.getExams();
    }

    @GetMapping("/students/exams/{yearOfStudy}")
    public List<Exam> findExamsYearOfStudy(@PathVariable int yearOfStudy) {
        return studentsService.findByYoS(yearOfStudy);
    }

    @GetMapping("/students/{faculty}")
    public List<Exam> findExamsFaculty(@PathVariable String faculty) {
        return studentsService.findByFaculty(faculty);
    }
}
