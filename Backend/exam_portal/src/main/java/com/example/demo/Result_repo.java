package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
@EnableJpaRepositories
@Repository
public interface Result_repo extends JpaRepository<Result, Integer> 
{

	//List<Result> findByQuiz(Quiz quiz);
	//public List<Question> findByQuiz(Quiz quiz);
	public List<Result> findByQuiz(Quiz quiz);

}
