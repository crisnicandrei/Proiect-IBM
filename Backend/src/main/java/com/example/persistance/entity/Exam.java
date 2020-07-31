package com.example.persistance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Exam {

    @Id
    @GeneratedValue
    private int id;
    private Date date;
    private int seats;
    private int yearOfStudy;
    private int semester;
    private int academycYear;
    private String course;
    private String faculty;


    public Exam(int id,Date date, int seats, int yearOfStudy, int semester, int academycYear, String course,String faculty) {
        this.id = id;
        this.date = date;
        this.seats = seats;
        this.yearOfStudy = yearOfStudy;
        this.semester = semester;
        this.academycYear = academycYear;
        this.course = course;
        this.faculty = faculty;
    }

    public int getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public int getSeats() {
        return seats;
    }

    public int getYearOfStudy() {
        return yearOfStudy;
    }

    public int getSemester() {
        return semester;
    }

    public int getAcademycYear() {
        return academycYear;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    public void setYearOfStudy(int yearOfStudy) {
        this.yearOfStudy = yearOfStudy;
    }

    public void setSemester(int semester) {
        this.semester = semester;
    }

    public void setAcademycYear(int academycYear) {
        this.academycYear = academycYear;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getFaculty() { return faculty; }

    public void setFaculty(String faculty) { this.faculty = faculty; }
}
