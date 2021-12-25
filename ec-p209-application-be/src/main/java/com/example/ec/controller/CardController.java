package com.example.ec.controller;

import com.example.ec.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/card")
@CrossOrigin
public class CardController {

    @Autowired
    private CardService cardService;

//    @Autowired
//    private CreditCardRepository creditCardRepository;
//
//    @Autowired
//    private DebitCardRepository debitCardRepository;
//
//    @GetMapping("/getallcredit")
//    private List<CreditCard> getAllCredit() {
//        return creditCardRepository.findAll();
//    }
//
//    @GetMapping("/getalldebiit")
//    private List<DebitCard> getAllDebit() {
//        return debitCardRepository.findAll();
//    }

    @PostMapping("/localdebit/getbycid")
    private Map<String, Object> getLocalDebitByCid(@RequestBody Map<String, Object> obj) {
        String _cid = obj.get("cid").toString();
        return cardService.getLocalDebitByCid(_cid);
    }
    @PostMapping("/interdebit/getbycid")
    private Map<String, Object> getInterDebitByCid(@RequestBody Map<String, Object> obj) {
        String _cid = obj.get("cid").toString();
        return cardService.getInterDebitByCid(_cid);
    }
    @PostMapping("/credit/getbycid")
    private Map<String, Object> getCreditByCid(@RequestBody Map<String, Object> obj) {
        String _cid = obj.get("cid").toString();
        return cardService.getCreditByCid(_cid);
    }

    @PostMapping("/getcardinfo")
    private Map<String, Object> getCardInfo(@RequestBody Map<String, Object> obj) {
        if(obj.get("credit_card_id") != null) {
            return cardService.getCredit(obj.get("credit_card_id").toString());
        } else {
            return cardService.getDebit(obj.get("debit_card_id").toString());
        }
    }
}
