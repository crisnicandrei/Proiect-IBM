package com.example.persistance.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class Exam {

    @Id
    @GeneratedValue
    private long id;
    private String date;
    private int seats;
    private int yearOfStudy;
    private int semester;
    private int academycYear;
    private String course;
    private String faculty;

    public Exam() { }


    public long getId() {
        return id;
    }

    public String getDate() {
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

    public void setId(long id) {
        this.id = id;
    }

    public void setDate(String date) {
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
