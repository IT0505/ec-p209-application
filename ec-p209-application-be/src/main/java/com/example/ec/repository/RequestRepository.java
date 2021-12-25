package com.example.ec.repository;

import com.example.ec.model.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface RequestRepository extends JpaRepository<Request, Integer> {
    @Query(value = "SELECT * FROM request_view", nativeQuery = true)
    List<Map<String, Object>> getAllRequest();

    @Query(value = "SELECT * FROM request_view WHERE request_id = :param", nativeQuery = true)
    Map<String, Object> getRequestById(@Param("param") Integer param);
}
