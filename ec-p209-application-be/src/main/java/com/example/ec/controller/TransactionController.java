package com.example.ec.controller;

import com.example.ec.model.CreditCard;
import com.example.ec.model.DebitCard;
import com.example.ec.model.Transaction;
import com.example.ec.service.AccountService;
import com.example.ec.service.CardService;
import com.example.ec.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/transaction")
@CrossOrigin
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private AccountService accountService;

    @Autowired
    private CardService cardService;

//    @Autowired
//    private TransactionRepository transactionRepository;
//
//    @GetMapping("/getall")
//    private List<Transaction> getAll() {
//        return transactionRepository.findAll();
//    }

    @PostMapping("/getbycid")
    private List<Map<String, Object>> getTransactionByCid(@RequestBody Map<String, Object> obj) {
        String _cid = obj.get("cid").toString();
        return transactionService.getTransactionByCid(_cid);
    }

    @PostMapping("/getall")
    private List<Map<String, Object>> getAllTransaction() {
        return transactionService.getAllTransaction();
    }

//    @PostMapping("/add")
//    private boolean rechargeTransaction(@RequestBody Map<String, Object> obj) {
//        Transaction transaction = new Transaction();
//        Integer price = Integer.parseInt(obj.get("total_price").toString());
//        Integer type = Integer.parseInt(obj.get("transaction_type_code").toString());
//        String debit_id = null; String credit_card = null;
//        if(obj.get("debit_card_id") != null)
//            debit_id = obj.get("debit_card_id").toString();
//        if(obj.get("credit_card_id") != null)
//            credit_card = obj.get("debit_card_id").toString();
//
//        transaction.setDate_of_transaction(obj.get("date_of_transaction").toString());
//        transaction.setTotal_price(price);
//        transaction.setTransaction_type_code(type);
//        transaction.setDebit_card_id(debit_id);
//        transaction.setCredit_card_id(credit_card);
//
//        String cid = obj.get("cid").toString();
//        Map<String, Object> acc = accountService.getAccountByCid(cid);
//        if(accountService.updateAccount(acc.get("account_number").toString(), transaction.getTotal_price()) == true) {
//             return transactionService.addTransaction(transaction);
//        } else return false;
//    }

    @PostMapping("/add")
    private boolean addTransaction(@RequestBody Transaction transaction) {
        Optional<DebitCard> debitCard = null;
        Optional<CreditCard> _creditCard = null;
        String accountNum = null;

        //get accountNum
        try {
            if(transaction.getDebit_card_id() != null){
                debitCard =  cardService.getDebitById(transaction.getDebit_card_id());
                accountNum = debitCard.get().getAccount_number();

                if(accountService.updateAccount(accountNum, transaction.getTotal_price()) == true) {
                    if(transactionService.addTransaction(transaction) == true){
                        if(transaction.getTotal_price()>0) {
                            Transaction transaction1 = accountService.takeRecharge(accountNum);
                            if(transaction1 != null) transactionService.addTransaction(transaction1);
                        } return true;
                    } else return false;
                } else return false;

            } else if(transaction.getCredit_card_id() != null) {
                _creditCard = cardService.getCreditById(transaction.getCredit_card_id());
                CreditCard creditCard = _creditCard.get();

                if(cardService.updateCredit(creditCard, transaction.getTotal_price()) == true) {
                    return transactionService.addTransaction(transaction);
                } else return false;
            }
            return false;
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }
    }
}
