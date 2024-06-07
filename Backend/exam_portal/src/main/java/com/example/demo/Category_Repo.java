package com.example.demo;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
@Service

@EnableJpaRepositories
@Repository
public interface Category_Repo  extends JpaRepository<Category, Integer>
{
	
}
