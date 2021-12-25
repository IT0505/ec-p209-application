package com.example.ec.service;

import com.example.ec.model.Customer;
import com.example.ec.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> getAll() {
        return customerRepository.findAll();
    }

    @Override
    public boolean addCustomer(Customer customer) {
        try{
            boolean check = customerRepository.existsById(customer.getCustomer_citizen_identification());
            if(check == true)
                return false;
            else{
            customerRepository.save(customer);
            return true;
            }
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }
    }

    @Override
    public Optional<Customer> getCustomer(String id) {
        return customerRepository.findById(id);
    }

}
