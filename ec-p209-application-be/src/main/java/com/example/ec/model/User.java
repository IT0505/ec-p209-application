package com.example.ec.model;

import javax.persistence.*;

@Entity
@Table(name = "login")
public class User {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String username;

    private String password;
    private String role;
    private String customer_citizen_identification;
    private String staff_citizen_identification;

    public User(String username, String password, String role, String customer_citizen_identification, String staff_citizen_identification) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.customer_citizen_identification = customer_citizen_identification;
        this.staff_citizen_identification = staff_citizen_identification;
    }

    public User(){}

    public String getCustomer_citizen_identification() {
        return customer_citizen_identification;
    }

    public void setCustomer_citizen_identification(String customer_citizen_identification) {
        this.customer_citizen_identification = customer_citizen_identification;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getStaff_citizen_identification() {
        return staff_citizen_identification;
    }

    public void setStaff_citizen_identification(String staff_citizen_identification) {
        this.staff_citizen_identification = staff_citizen_identification;
    }
}
