package com.example.ec.service;

import com.example.ec.model.CreditCard;
import com.example.ec.model.DebitCard;
import com.example.ec.model.Request;
import com.example.ec.repository.CreditCardRepository;
import com.example.ec.repository.DebitCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.time.LocalDate;
import java.util.*;

@Service
public class CardServiceImpl implements CardService{

    @Autowired
    private DebitCardRepository debitCardRepository;

    @Autowired
    private CreditCardRepository creditCardRepository;

    @Override
    public Map<String, Object> getLocalDebitByCid(String cid) {
        return debitCardRepository.getDebitByCid(1, cid);
    }

    @Override
    public Map<String, Object> getInterDebitByCid(String cid) {
        return debitCardRepository.getDebitByCid(2, cid);
    }

    @Override
    public Map<String, Object> getCreditByCid(String cid) {
        return creditCardRepository.getCreditByCid(cid);
    }

    @Override
    public Optional<DebitCard> getDebitById(String id) {
        return debitCardRepository.findById(id);
    }

    @Override
    public Optional<CreditCard> getCreditById(String id) {
        return creditCardRepository.findById(id);
    }

    @Override
    public Map<String, Object> getDebit(String id) {
        return debitCardRepository.getDebitById(id);
    }

    @Override
    public Map<String, Object> getCredit(String id) {
        return creditCardRepository.getCreditById(id);
    }

    @Override
    public boolean createCard(Request request, Long lineCredit) {
        if(request.getCard_type().equals("Credit Card")) {
            return createCredit(request.getAccount_number(), lineCredit);
        } else if(request.getCard_type().equals("Debit Card")) {
            return createDebit(request.getAccount_number(), 1);
        } else {
            return createDebit(request.getAccount_number(), 2);
        }
    }

    @Override
    public boolean createDebit(String accNum, Integer cardType) {
        try {
            List<DebitCard> debitCardList = debitCardRepository.findAll();
            List<String> debitIdList = new ArrayList<>();
            for(int i=0; i<debitCardList.size(); i++) {
                debitIdList.add(debitCardList.get(i).getDebit_card_id());
            }
            if(cardType == 1) {
                File file = ResourceUtils.getFile("classpath:data/debit_local_card_id.txt");
                String cardId = getCardId(file, debitIdList);
                DebitCard debitCard = new DebitCard(cardId, LocalDate.now().toString(), accNum, 1);
                debitCardRepository.save(debitCard);
                return true;
            } else {
                File file = ResourceUtils.getFile("classpath:data/debit_international_card_id.txt");
                String cardId = getCardId(file, debitIdList);
                DebitCard debitCard = new DebitCard(cardId, LocalDate.now().toString(), accNum, 2);
                debitCardRepository.save(debitCard);
                return true;
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }

    @Override
    public boolean createCredit(String accNum, Long lineCredit) {
        try {
            List<CreditCard> creditCardList = creditCardRepository.findAll();
            List<String> creditIdList = new ArrayList<>();
            for(int i=0; i<creditCardList.size(); i++) {
                creditIdList.add(creditCardList.get(i).getCredit_card_id());
            }
            File file = ResourceUtils.getFile("classpath:data/credit_card_id.txt");
            String cardId = getCardId(file, creditIdList);
            CreditCard creditCard = new CreditCard(cardId, LocalDate.now().toString(), LocalDate.now().plusYears(5).toString(), lineCredit, LocalDate.now().plusDays(30).toString(), Long.parseLong("0"), Long.parseLong("0"), accNum);
            creditCardRepository.save(creditCard);
            return true;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }

    @Override
    public boolean updateCredit(CreditCard creditCard, Long totalPrice) {
        try {
            Long lineCredit = creditCard.getLine_of_credit();
            Long loan = creditCard.getLoan();

            Long newLoan = loan+(-totalPrice);
            if(newLoan + creditCard.getTotal_loan() > lineCredit) {
                return false;
            } else {
                creditCard.setLoan(newLoan);
                creditCardRepository.save(creditCard);
                return true;
            }
        } catch (Exception e) {
            return false;
        }
    }

    private String getCardId(File file, List<String> debitIdList) {
        try {
            String index = "";
            BufferedReader fileReader = new BufferedReader(new FileReader(file));
            Random ran = new Random();
            List<String> cardIdList = new ArrayList<>();

            while ((index=fileReader.readLine()) != null) {
                cardIdList.add(index);
            }
            boolean flag;
            do {
                flag = true;
                index = cardIdList.get(ran.nextInt(cardIdList.size()));
                for(int i=0; i<debitIdList.size(); i++) {
                    if(index.equals(debitIdList.get(i))) {
                        flag = false;
                        break;
                    }
                }
            }
            while (!flag);
            return index;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return "Error";
        }
    }
}
