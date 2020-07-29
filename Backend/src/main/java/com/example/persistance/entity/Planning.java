package com.example.persistance.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class Planning {
    @Id
    @GeneratedValue
    private int id;
    private int exam_id;
    private int student_id;
    private int prof_id;

    public Planning(int id, int exam_id, int student_id, int prof_id) {
        this.id = id;
        this.exam_id = exam_id;
        this.student_id = student_id;
        this.prof_id = prof_id;
    }

    public int getId() {
        return id;
    }

    public int getExam_id() {
        return exam_id;
    }

    public int getStudent_id() {
        return student_id;
    }

    public int getProf_id() {
        return prof_id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setExam_id(int exam_id) {
        this.exam_id = exam_id;
    }

    public void setStudent_id(int student_id) {
        this.student_id = student_id;
    }

    public void setProf_id(int prof_id) {
        this.prof_id = prof_id;
    }
}
