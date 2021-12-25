package com.example.ec.service;

import com.example.ec.model.CreditCard;
import com.example.ec.model.DebitCard;
import com.example.ec.model.Request;

import java.util.Map;
import java.util.Optional;

public interface CardService {
    public Map<String, Object> getLocalDebitByCid(String cid);
    public Map<String, Object> getInterDebitByCid(String cid);
    public Map<String, Object> getCreditByCid(String cid);

    public Optional<DebitCard> getDebitById(String id);
    public Optional<CreditCard> getCreditById(String id);

    public Map<String, Object> getDebit(String id);
    public Map<String, Object> getCredit(String id);

    public boolean createCard(Request request, Long lineCredit);
    public boolean createDebit(String accNum, Integer cardType);
    public boolean createCredit(String accNum, Long lineCredit);

    public boolean updateCredit(CreditCard creditCard, Long totalPrice);

}
