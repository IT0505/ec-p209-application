package com.example.ec.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "customer")
public class Customer {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String customer_citizen_identification;

    private String customer_name;
    private String customer_address;
    private String customer_phone;
    private Date date_become_customer;
    private String customer_type;

    public Customer() {}

    public Customer(String customer_citizen_identification, String customer_name, String customer_address, String customer_phone, Date date_become_customer, String customer_type) {
        this.customer_citizen_identification = customer_citizen_identification;
        this.customer_name = customer_name;
        this.customer_address = customer_address;
        this.customer_phone = customer_phone;
        this.date_become_customer = date_become_customer;
        this.customer_type = customer_type;
    }

    public String getCustomer_citizen_identification() {
        return customer_citizen_identification;
    }

    public void setCustomer_citizen_identification(String customer_citizen_identification) {
        this.customer_citizen_identification = customer_citizen_identification;
    }

    public String getCustomer_name() {
        return customer_name;
    }

    public void setCustomer_name(String customer_name) {
        this.customer_name = customer_name;
    }

    public String getCustomer_address() {
        return customer_address;
    }

    public void setCustomer_address(String customer_address) {
        this.customer_address = customer_address;
    }

    public String getCustomer_phone() {
        return customer_phone;
    }

    public void setCustomer_phone(String customer_phone) {
        this.customer_phone = customer_phone;
    }

    public Date getDate_become_customer() {
        return date_become_customer;
    }

    public void setDate_become_customer(Date date_become_customer) {
        this.date_become_customer = date_become_customer;
    }

    public String getCustomer_type() {
        return customer_type;
    }

    public void setCustomer_type(String customer_type) {
        this.customer_type = customer_type;
    }
}
