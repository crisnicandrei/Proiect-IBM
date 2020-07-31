package com.example.service.function;

import com.example.persistance.entity.Exam;
import com.example.persistance.entity.Login;
import com.example.persistance.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public List<Login> getUsers() {
        return loginRepository.findAll();
    }

    public Login createLogin(Login login) {
        return loginRepository.save(login);
    }
}