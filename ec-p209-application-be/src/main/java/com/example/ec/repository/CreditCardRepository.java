package com.example.ec.repository;

import com.example.ec.model.CreditCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Map;

public interface CreditCardRepository extends JpaRepository<CreditCard, String> {
    @Query(value = "SELECT * FROM credit_card_view WHERE customer_citizen_identification = :param", nativeQuery = true)
    Map<String, Object> getCreditByCid(@Param("param") String param);

    @Query(value = "SELECT * FROM credit_card_view WHERE credit_card_id = :param", nativeQuery = true)
    Map<String, Object> getCreditById(@Param("param") String param);
}
