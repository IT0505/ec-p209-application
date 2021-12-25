package com.example.ec.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "debit_card")
public class DebitCard {

    @Id
    private String debit_card_id;
    private String  date_open;
    private String account_number;
    private Integer debit_type_code;

    public DebitCard() {}

    public DebitCard(String debit_card_id, String date_open, String account_number, Integer debit_type_code) {
        this.debit_card_id = debit_card_id;
        this.date_open = date_open;
        this.account_number = account_number;
        this.debit_type_code = debit_type_code;
    }

    public String getDebit_card_id() {
        return debit_card_id;
    }

    public void setDebit_card_id(String debit_card_id) {
        this.debit_card_id = debit_card_id;
    }

    public String getDate_open() {
        return date_open;
    }

    public void setDate_open(String date_open) {
        this.date_open = date_open;
    }

    public String getAccount_number() {
        return account_number;
    }

    public void setAccount_number(String account_number) {
        this.account_number = account_number;
    }

    public Integer getDebit_type_code() {
        return debit_type_code;
    }

    public void setDebit_type_code(Integer debit_type_code) {
        this.debit_type_code = debit_type_code;
    }
}
