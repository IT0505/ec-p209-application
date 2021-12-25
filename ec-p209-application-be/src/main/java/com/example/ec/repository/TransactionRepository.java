package com.example.ec.repository;

import com.example.ec.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
    @Query(value = "SELECT * FROM transaction_view WHERE customer_citizen_identification = :param", nativeQuery = true)
    List<Map<String, Object>> getTransactionByCid(@Param("param") String param);

    @Query(value = "SELECT * FROM transaction_view", nativeQuery = true)
    List<Map<String, Object>> getAllTransaction();

    @Query(value = "SELECT max(transaction_id) AS last_tran_num FROM transactions", nativeQuery = true)
    Integer getLastId();
}
