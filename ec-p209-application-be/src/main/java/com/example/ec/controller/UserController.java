package com.example.ec.controller;


import com.example.ec.model.User;
import com.example.ec.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

//    @GetMapping("/getall")
//    private List<User> getall() {
//        return userService.getAll();
//    }

    @PostMapping("/login")
    private Map<String, Object> userLogin(@RequestBody Map<String, Object> user) {
        return userService.checkLogin(user);
    }

    @PostMapping("/add")
    private boolean userLogin(@RequestBody User user) {
        return userService.addUser(user);
    }

}
