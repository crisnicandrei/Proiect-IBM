package com.example.controller;

import com.example.persistance.entity.Exam;
import com.example.service.function.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ExamController {

    @Autowired
    private ExamService examService;

    //@GetMapping("/exams")

    @RequestMapping(value = "/exams", method = RequestMethod.GET)
    public List<Exam> exams() {
        return examService.getExams();
    }

    @GetMapping("/")
    public String home() {
        return "home";
    }

    //@PostMapping("/addExam")
    @RequestMapping(value = "/addExam", method = RequestMethod.POST)
    public Exam addExam(@RequestBody Exam exam) {
        return examService.createExam(exam);
    }

    @PutMapping("/updateExam")
    public Exam updateExam(@RequestBody Exam exam) {
        return examService.updateExam(exam);
    }

    //@RequestMapping(value = "/deleteExam/{id}", method = RequestMethod.DELETE)
    @DeleteMapping("/deleteExam/{id}")
    public String deleteExam(@PathVariable long id) {
        return examService.deleteExam(id);
    }
}
