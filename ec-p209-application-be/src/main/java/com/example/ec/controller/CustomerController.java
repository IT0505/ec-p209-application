package com.example.ec.controller;

import com.example.ec.model.Customer;
import com.example.ec.repository.CustomerRepository;
import com.example.ec.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("/getall")
    private List<Customer> getall() {
        return customerService.getAll();
    }

    @PostMapping("/getcustomer")
    private Optional<Customer> getCustomer(@RequestBody Map<String, Object> obj) {
        String _id = obj.get("id").toString();
        return customerService.getCustomer(_id);
    }

    @PostMapping("/add")
    private boolean addCustomer(@RequestBody Customer obj) {
        return customerService.addCustomer(obj);
    }

    @PostMapping("/deletebycid")
    private boolean deleteCustomer(@RequestBody Map<String, Object> obj) {
        String cid = obj.get("cid").toString();
        customerRepository.deleteById(cid);
        return true;
    }
}
