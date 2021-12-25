package com.example.ec.service;

import com.example.ec.model.User;
import com.example.ec.repository.CustomerRepository;
import com.example.ec.repository.UserRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public boolean addUser(User user) {
        try {
            boolean check = userRepository.existsById(user.getUsername());
            if(check == true)
                throw new Exception("user existed");
            else {
                String hashPass = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt(12));
                user.setPassword(hashPass);
                userRepository.save(user);
                return true;
            }
        } catch (Exception e) {
            System.out.println(e);
            String cid = user.getCustomer_citizen_identification();
            customerRepository.deleteById(cid);
            return false;
        }
    }

    @Override
    public Map<String, Object> checkLogin(Map<String, Object> user) {
        Map<String, Object> obj = new HashMap<>();
        List<User> listUser = userRepository.findAll();
        for(int i=0; i<listUser.size(); i++) {
            if(user.get("username").equals(listUser.get(i).getUsername()) && BCrypt.checkpw(user.get("password").toString(), (listUser.get(i).getPassword()) )) {
                obj.put("user_token", listUser.get(i).getCustomer_citizen_identification());
                obj.put("admin_token", listUser.get(i).getStaff_citizen_identification());
                obj.put("result", true);
                System.out.println(obj);
                return obj;
            }
        }
        obj.put("result", false);
        System.out.println(obj);
        return obj;
    }
}
