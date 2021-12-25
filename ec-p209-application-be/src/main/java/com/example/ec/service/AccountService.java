package com.example.ec.service;

import com.example.ec.model.Account;
import com.example.ec.model.Transaction;

import java.util.List;
import java.util.Map;

public interface AccountService {
    public List<Account> getAll();
    public Map<String, Object> getAccountByCid(String cid);
    public List<Map<String, Object>> getAllAccount();
    public boolean addAccount(Map<String, Object> obj);
    public boolean updateAccount(String accNum, Long amount);
    public Transaction takeRecharge(String accNum);
    public void takeExpiration();
}
