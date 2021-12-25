package com.example.ec.service;

import com.example.ec.model.Account;
import com.example.ec.model.CreditCard;
import com.example.ec.model.Transaction;
import com.example.ec.model.User;
import com.example.ec.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class AccountServiceImpl implements AccountService{

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private CreditCardRepository creditCardRepository;

    @Override
    public List<Account> getAll() {
        return accountRepository.findAll();
    }

    @Override
    public Map<String, Object> getAccountByCid(String cid) {
        return accountRepository.getAccountByCid(cid);
    }

    @Override
    public List<Map<String, Object>> getAllAccount() {
        return accountRepository.getAllAccount();
    }

    @Override
    public boolean addAccount(Map<String, Object> obj) {
        try {
            String last_acc_num = accountRepository.getLastAccountNumber();
            if(last_acc_num == null){
                last_acc_num = "19110000000000";
            }
            Long new_acc_num = (Long.parseLong(last_acc_num)+1);
            Date open_date = Date.valueOf(obj.get("date_become_customer").toString());
            Long total_asset = Long.parseLong("0");
            Account account = new Account(new_acc_num.toString(), open_date, total_asset, obj.get("customer_citizen_identification").toString());

            accountRepository.save(account);
            return true;
        } catch (Exception e) {
            System.out.println(e);
            String cid = obj.get("customer_citizen_identification").toString();
            User user = userRepository.getUserByCid(cid);
            userRepository.delete(user);
            customerRepository.deleteById(cid);
            return false;
        }
    }

    @Override
    public boolean updateAccount(String accNum, Long amount) {
        try {
            Account acc = accountRepository.getById(accNum);
            Long balance = acc.getTotal_asset();
            Long newBalance = balance + amount;

            if(newBalance < 0) {
                return false;
            } else {
                acc.setTotal_asset(newBalance);
                accountRepository.save(acc);
                return true;
            }
        } catch (Exception e) {
            System.out.println(e);
            transactionRepository.deleteById(transactionRepository.getLastId());
            return false;
        }
    }

    @Override
    public Transaction takeRecharge(String accNum) {
        try {
            Transaction transaction = new Transaction();

            Optional<Account> acc = accountRepository.findById(accNum);
            Account account = acc.get();

            Map<String, Object> creditObj = creditCardRepository.getCreditByCid(acc.get().getCustomer_citizen_identification());

            if(creditObj.get("credit_card_id") != null) {
                Optional<CreditCard> creditOpt = creditCardRepository.findById(creditObj.get("credit_card_id").toString());
                CreditCard creditCard = creditOpt.get();

                if (creditCard.getTotal_loan() > 0) {
                    LocalDate now = LocalDate.now();
                    LocalDate expirationDate = LocalDate.parse(creditCard.getExpiration_date());
                    LocalDate preExpirationDate = expirationDate.minusDays(30);

                    Long dis = ChronoUnit.DAYS.between(preExpirationDate, now);

                    Double newTotalLoan = creditCard.getTotal_loan() + creditCard.getTotal_loan() * 0.005 * dis;

                    Long value;
                    if (account.getTotal_asset() >= newTotalLoan) {
                        account.setTotal_asset(account.getTotal_asset() - newTotalLoan.longValue());
                        creditCard.setTotal_loan(Long.parseLong("0"));
                        value = newTotalLoan.longValue();
                    } else {
                        newTotalLoan = newTotalLoan - account.getTotal_asset();
                        creditCard.setTotal_loan(newTotalLoan.longValue());
                        account.setTotal_asset(Long.parseLong("0"));
                        value = account.getTotal_asset();
                    }

                    transaction.setDate_of_transaction(LocalDateTime.now().toString());
                    transaction.setCredit_card_id(creditCard.getCredit_card_id());
                    transaction.setTransaction_type_code(6);
                    transaction.setTotal_price(value);

                    accountRepository.save(account);
                    creditCardRepository.save(creditCard);

                    return transaction;

//                    System.out.println("STK " + account.getTotal_asset());
//                    System.out.println("SN " + creditCard.getLoan());
//                    System.out.println("TN " + creditCard.getTotal_loan());
//                    System.out.println("--------------------------------");
                }
            } return null;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @Override
    public void takeExpiration() {
        try {
            List<Account> accList = accountRepository.findAll();
            for (int i = 0; i < accList.size(); i++) {
                Optional<Account> acc = accountRepository.findById(accList.get(i).getAccount_number());
                Account account = acc.get();

                Map<String, Object> creditObj = creditCardRepository.getCreditByCid(acc.get().getCustomer_citizen_identification());

                if (creditObj.get("credit_card_id") != null) {
                    Optional<CreditCard> creditOpt = creditCardRepository.findById(creditObj.get("credit_card_id").toString());
                    CreditCard creditCard = creditOpt.get();

                    if (account.getTotal_asset() >= creditCard.getLoan()) {
                        account.setTotal_asset(account.getTotal_asset() - creditCard.getLoan());
                        creditCard.setLoan(Long.parseLong("0"));
                    } else {
                        creditCard.setLoan(creditCard.getLoan() - account.getTotal_asset());
                        account.setTotal_asset(Long.parseLong("0"));
                    }
                    Double newTotalLoan = creditCard.getTotal_loan() + creditCard.getTotal_loan() * 0.15;
                    newTotalLoan = newTotalLoan + creditCard.getLoan();

                    creditCard.setLoan(Long.parseLong("0"));
                    creditCard.setTotal_loan(newTotalLoan.longValue());

                    creditCard.setExpiration_date(LocalDate.now().plusDays(30).toString());

//                    System.out.println("STK " + account.getTotal_asset());
//                    System.out.println("SN " + creditCard.getLoan());
//                    System.out.println("TN " + creditCard.getTotal_loan());
//                    System.out.println("--------------------------------");

                    creditCardRepository.save(creditCard);
                    accountRepository.save(account);
                }
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
