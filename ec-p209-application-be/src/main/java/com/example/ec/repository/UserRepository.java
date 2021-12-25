package com.example.ec.repository;

import com.example.ec.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    @Query(value = "SELECT * FROM login WHERE customer_citizen_identification = :param", nativeQuery = true)
    User getUserByCid(@Param("param") String param);
}
