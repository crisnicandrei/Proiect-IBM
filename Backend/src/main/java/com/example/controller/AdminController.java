package com.example.controller;

import com.example.persistance.entity.Admin;
import com.example.persistance.entity.Exam;
import com.example.service.function.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AdminController {

    @Autowired
    private AdminService adminservice;

    @GetMapping("/exams")
    public List<Exam> findExams() {
        return adminservice.getExams();
    }

    @PostMapping("/addExam")
    public Exam addExam(@RequestBody Exam exam) {
        return adminservice.createExam(exam);
    }

    @PostMapping("/upadateExam")
    public Exam updateExam(@RequestBody Exam exam) {
        return adminservice.updateExam(exam);
    }

    @DeleteMapping("/deleteExam/{id}")
    public Exam deleteExam(@PathVariable int id) {
        return adminservice.deleteExam(id);
    }
}
