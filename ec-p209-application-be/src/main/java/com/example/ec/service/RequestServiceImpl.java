package com.example.ec.service;

import com.example.ec.model.CreditCard;
import com.example.ec.model.DebitCard;
import com.example.ec.model.Request;
import com.example.ec.repository.CreditCardRepository;
import com.example.ec.repository.DebitCardRepository;
import com.example.ec.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RequestServiceImpl implements RequestService{

    @Autowired
    private RequestRepository requestRepository;

    @Autowired
    private DebitCardRepository debitCardRepository;

    @Autowired
    private CreditCardRepository creditCardRepository;

    @Autowired
    private CardService cardService;

    @Override
    public List<Map<String, Object>> getAllRequest() {
        return requestRepository.getAllRequest();
    }

    @Override
    public Map<String, Object> getRequestById(Integer id) {
        return requestRepository.getRequestById(id);
    }

    @Override
    public boolean addRequest(Request request) {
        try {
            requestRepository.save(request);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public Map<String, Object> checkCard(String accNum) {
        List<DebitCard> debitCardList = debitCardRepository.findAll();
        List<CreditCard> creditCardList = creditCardRepository.findAll();
        List<Request> requestList = requestRepository.findAll();
        Map<String, Object> typeList = new HashMap<>();
        for(int i=0; i<debitCardList.size(); i++) {
            if(accNum.equals(debitCardList.get(i).getAccount_number()) && debitCardList.get(i).getDebit_type_code()==1) {
                typeList.put("debit_card", true);
            }
            if(accNum.equals(debitCardList.get(i).getAccount_number()) && debitCardList.get(i).getDebit_type_code()==2) {
                typeList.put("inter_debit_card", true);
            }
        }
        for(int i=0; i<creditCardList.size(); i++) {
            if(accNum.equals(creditCardList.get(i).getAccount_number())) {
                typeList.put("credit_card", true);
            }
        }
        for (int i=0; i<requestList.size(); i++) {
            if(accNum.equals(requestList.get(i).getAccount_number()) && requestList.get(i).getProcessed()==0) {
                if (requestList.get(i).getCard_type().equals("Debit Card")) {
                    typeList.put("debit_request", true);
                }
                if (requestList.get(i).getCard_type().equals("International Debit Card")) {
                    typeList.put("inter_debit_request", true);
                }
                if (requestList.get(i).getCard_type().equals("Credit Card")) {
                    typeList.put("credit_request", true);
                }
            }
        }


        return typeList;
    }

    @Override
    public boolean approveRequest(Request request, Long lineCredit) {
        try{
            boolean flag = cardService.createCard(request, lineCredit);
            if(flag) {
                request.setProcessed(1);
                requestRepository.save(request);
            }
            return flag;
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }
    }

    @Override
    public boolean declineRequest(Request request) {
        try {
            request.setProcessed(-1);
            requestRepository.save(request);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
