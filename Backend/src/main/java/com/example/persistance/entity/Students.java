package com.example.persistance.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Students {
    @Id
    @GeneratedValue
    private int id;
    private int yearOfStudy;
    private String email;
    private String name;

    public Students(int id, int yearOfStudy, String email, String name) {
        this.id = id;
        this.yearOfStudy = yearOfStudy;
        this.email = email;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public int getYearOfStudy() {
        return yearOfStudy;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setYearOfStudy(int yearOfStudy) {
        this.yearOfStudy = yearOfStudy;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setName(String name) {
        this.name = name;
    }


}
