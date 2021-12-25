package com.example.ec.controller;

import com.example.ec.model.Account;
import com.example.ec.model.CreditCard;
import com.example.ec.repository.AccountRepository;
import com.example.ec.repository.CreditCardRepository;
import com.example.ec.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.time.temporal.ChronoUnit;

@RestController
@RequestMapping("/api/account")
@CrossOrigin
public class AccountController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private CreditCardRepository creditCardRepository;
//    @GetMapping("/getall")
//    private List<Account> getAll() {
//        return accountService.getAll();
//    }

    @PostMapping("/getbycid")
    private Map<String, Object> getAccountByCId(@RequestBody Map<String, Object> obj) {
        String _cid = obj.get("cid").toString();
        return accountService.getAccountByCid(_cid);
    }

    @PostMapping("/getall")
    private List<Map<String, Object>> getAllAccount() {
        return accountService.getAllAccount();
    }

    @PostMapping("/add")
    private boolean addAccount(@RequestBody Map<String, Object> obj) {
        return accountService.addAccount(obj);
    }
}
