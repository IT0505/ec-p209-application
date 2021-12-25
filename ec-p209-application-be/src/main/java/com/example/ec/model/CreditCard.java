package com.example.ec.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "credit_card")
public class CreditCard {

    @Id
    private String credit_card_id;
    private String date_open;
    private String date_close;
    private Long line_of_credit;
    private String expiration_date;
    private Long loan;
    private Long total_loan;
    private String account_number;

    public CreditCard() {}

    public CreditCard(String credit_card_id, String date_open, String date_close, Long line_of_credit, String expiration_date, Long loan, Long total_loan, String account_number) {
        this.credit_card_id = credit_card_id;
        this.date_open = date_open;
        this.date_close = date_close;
        this.line_of_credit = line_of_credit;
        this.expiration_date = expiration_date;
        this.loan = loan;
        this.total_loan = total_loan;
        this.account_number = account_number;
    }

    public String getCredit_card_id() {
        return credit_card_id;
    }

    public void setCredit_card_id(String credit_card_id) {
        this.credit_card_id = credit_card_id;
    }

    public String getDate_open() {
        return date_open;
    }

    public void setDate_open(String date_open) {
        this.date_open = date_open;
    }

    public String getDate_close() {
        return date_close;
    }

    public void setDate_close(String date_close) {
        this.date_close = date_close;
    }

    public Long getLine_of_credit() {
        return line_of_credit;
    }

    public void setLine_of_credit(Long line_of_credit) {
        this.line_of_credit = line_of_credit;
    }

    public String getExpiration_date() {
        return expiration_date;
    }

    public void setExpiration_date(String expiration_date) {
        this.expiration_date = expiration_date;
    }

    public Long getLoan() {
        return loan;
    }

    public void setLoan(Long loan) {
        this.loan = loan;
    }

    public Long getTotal_loan() {
        return total_loan;
    }

    public void setTotal_loan(Long total_loan) {
        this.total_loan = total_loan;
    }

    public String getAccount_number() {
        return account_number;
    }

    public void setAccount_number(String account_number) {
        this.account_number = account_number;
    }
}
