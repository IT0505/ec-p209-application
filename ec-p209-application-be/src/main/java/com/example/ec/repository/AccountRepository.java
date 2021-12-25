package com.example.ec.repository;

import com.example.ec.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface AccountRepository extends JpaRepository<Account, String> {
    @Query(value = "SELECT * FROM account_view WHERE customer_citizen_identification = :param", nativeQuery = true)
    Map<String, Object> getAccountByCid(@Param("param") String param);

    @Query(value = "SELECT * FROM account_view", nativeQuery = true)
    List<Map<String, Object>> getAllAccount();

    @Query(value = "SELECT max(account_number) AS last_acc_num FROM account", nativeQuery = true)
    String getLastAccountNumber();
}
