package com.example.ec.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "account")
public class Account {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String account_number;

    private Date date_open;
    private Long total_asset;
    private String customer_citizen_identification;

    public Account(String account_number, Date date_open, Long total_asset, String customer_citizen_identification) {
        this.account_number = account_number;
        this.date_open = date_open;
        this.total_asset = total_asset;
        this.customer_citizen_identification = customer_citizen_identification;
    }

    public Account() {}

    public String getAccount_number() {
        return account_number;
    }

    public void setAccount_number(String account_number) {
        this.account_number = account_number;
    }

    public Date getDate_open() {
        return date_open;
    }

    public void setDate_open(Date date_open) {
        this.date_open = date_open;
    }

    public Long getTotal_asset() {
        return total_asset;
    }

    public void setTotal_asset(Long total_asset) {
        this.total_asset = total_asset;
    }

    public String getCustomer_citizen_identification() {
        return customer_citizen_identification;
    }

    public void setCustomer_citizen_identification(String customer_citizen_identification) {
        this.customer_citizen_identification = customer_citizen_identification;
    }
}
