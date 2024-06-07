package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
@Service

@EnableJpaRepositories
@Repository
public interface quiz_Repo extends JpaRepository<Quiz, Integer>{

	public List<Quiz> findBycategory (Category category);
	
	public List<Quiz> findByquestion (Question question);
	
	
}
