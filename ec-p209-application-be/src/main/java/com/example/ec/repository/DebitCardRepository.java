package com.example.ec.repository;

import com.example.ec.model.DebitCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Map;

public interface DebitCardRepository extends JpaRepository<DebitCard, String> {
    @Query(value = "SELECT * FROM debit_card_view WHERE debit_type_code = :param", nativeQuery = true)
    Map<String, Object> getAllDebit(@Param("param") Integer param);

    @Query(value = "SELECT * FROM debit_card_view WHERE debit_type_code = :param1 AND customer_citizen_identification = :param2", nativeQuery = true)
    Map<String, Object> getDebitByCid(@Param("param1") Integer param1, @Param("param2") String param2);

    @Query(value = "SELECT * FROM debit_card_view WHERE debit_card_id = :param", nativeQuery = true)
    Map<String, Object> getDebitById(@Param("param") String param);
}
