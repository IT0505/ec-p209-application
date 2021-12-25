package com.example.ec.service;

import com.example.ec.model.Customer;

import java.util.List;
import java.util.Optional;

public interface CustomerService {
    public List<Customer> getAll();
    public boolean addCustomer(Customer customer);
    public Optional<Customer> getCustomer(String id);
}
