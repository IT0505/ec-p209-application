package com.example.ec.service;

import com.example.ec.model.User;

import java.util.List;
import java.util.Map;

public interface UserService {
    public List<User> getAll();
    public boolean addUser(User user);
    public Map<String, Object> checkLogin(Map<String, Object> user);
}
