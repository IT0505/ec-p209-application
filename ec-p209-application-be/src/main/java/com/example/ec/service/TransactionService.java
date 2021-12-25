package com.example.ec.service;

import com.example.ec.model.Transaction;

import java.util.List;
import java.util.Map;

public interface TransactionService {
    public List<Map<String, Object>> getTransactionByCid(String cid);
    public List<Map<String, Object>> getAllTransaction();
    public boolean addTransaction(Transaction transaction);
}
