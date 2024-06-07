package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
@EnableJpaRepositories
@Repository
public interface User_repo extends JpaRepository<users, Integer> {

	public users findByUsername(String username);
	
	
}



