package com.example.ec.model;

import javax.persistence.*;

@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer transaction_id;

    private String date_of_transaction;
    private Long total_price;
    private Integer transaction_type_code;
    private String debit_card_id;
    private String credit_card_id;

    public Transaction() {}

    public Transaction(String date_of_transaction, Long total_price, Integer transaction_type_code, String debit_card_id, String credit_card_id) {
        this.date_of_transaction = date_of_transaction;
        this.total_price = total_price;
        this.transaction_type_code = transaction_type_code;
        this.debit_card_id = debit_card_id;
        this.credit_card_id = credit_card_id;
    }

    public Integer getTransaction_id() {
        return transaction_id;
    }

    public void setTransaction_id(Integer transaction_id) {
        this.transaction_id = transaction_id;
    }

    public String getDate_of_transaction() {
        return date_of_transaction;
    }

    public void setDate_of_transaction(String date_of_transaction) {
        this.date_of_transaction = date_of_transaction;
    }

    public Long getTotal_price() {
        return total_price;
    }

    public void setTotal_price(Long total_price) {
        this.total_price = total_price;
    }

    public Integer getTransaction_type_code() {
        return transaction_type_code;
    }

    public void setTransaction_type_code(Integer transaction_type_code) {
        this.transaction_type_code = transaction_type_code;
    }

    public String getDebit_card_id() {
        return debit_card_id;
    }

    public void setDebit_card_id(String debit_card_id) {
        this.debit_card_id = debit_card_id;
    }

    public String getCredit_card_id() {
        return credit_card_id;
    }

    public void setCredit_card_id(String credit_card_id) {
        this.credit_card_id = credit_card_id;
    }
}
