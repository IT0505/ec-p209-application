package com.example.ec.service;

import com.example.ec.model.Request;

import java.util.List;
import java.util.Map;

public interface RequestService {
    public List<Map<String, Object>> getAllRequest();
    public Map<String, Object> getRequestById(Integer id);
    public boolean addRequest(Request request);
    public Map<String, Object> checkCard(String accNum);
    public boolean approveRequest(Request request, Long lineCredit);
    public boolean declineRequest(Request request);
}
