package com.example.controller;

import com.example.persistance.entity.Login;
import com.example.service.function.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LoginController {

    @Autowired
    LoginService loginService;

    @GetMapping("/login/users")
    public List<Login> findELogin() {

        return loginService.getUsers();
    }

    @PostMapping("/login/add/users")
    public Login createLogin(@RequestBody Login login) {
        return loginService.createLogin(login);
    }
}
