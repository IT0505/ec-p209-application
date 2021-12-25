package com.example.ec;

import com.example.ec.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.Printer;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@Configuration
@EnableAsync
@EnableScheduling
public class ECApplication implements WebMvcConfigurer {

    @Autowired
    private AccountService accountService;

//    @Override
//    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/images/**").addResourceLocations("file:images\\");
//    }

    @Scheduled(cron = "0 0 7 * * ?")
    public void  checkExpirationDate() {
        accountService.takeExpiration();
    }

    public static void main(String[] args) {
        SpringApplication.run(ECApplication.class, args);
    }

}
