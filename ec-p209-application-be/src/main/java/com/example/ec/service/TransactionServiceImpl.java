package com.example.ec.service;

import com.example.ec.model.Transaction;
import com.example.ec.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class TransactionServiceImpl implements TransactionService{

    @Autowired
    private TransactionRepository transactionRepository;

    @Override
    public List<Map<String, Object>> getTransactionByCid(String cid) {
        return transactionRepository.getTransactionByCid(cid);
    }

    @Override
    public List<Map<String, Object>> getAllTransaction() {
        return transactionRepository.getAllTransaction();
    }

    @Override
    public boolean addTransaction(Transaction transaction) {
        try {
            transactionRepository.save(transaction);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
