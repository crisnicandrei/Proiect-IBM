package com.example.controller;

import com.example.persistance.entity.Exam;
import com.example.service.function.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ExamController {

    @Autowired
    private ExamService examService;

    //@GetMapping("/exams")
    @RequestMapping(value="/exams", method=RequestMethod.GET)
    public List<Exam> findExams() {
        return examService.getExams();
    }

    @GetMapping("/")
    public String home() {
        return "home";
    }

    //@PostMapping("/addExam")
    @RequestMapping(value="/addExam", method=RequestMethod.POST)
    public Exam addExam(@RequestBody Exam exam) {
        return examService.createExam(exam);
    }

    @PostMapping("/upadateExam")
    public Exam updateExam(@RequestBody Exam exam) {
        return examService.updateExam(exam);
    }

    @DeleteMapping("/deleteExam/{id}")
    public Exam deleteExam(@PathVariable int id) {
        return examService.deleteExam(id);
    }
}
