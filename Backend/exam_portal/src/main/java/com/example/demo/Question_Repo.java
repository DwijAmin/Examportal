package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@EnableJpaRepositories
@Repository
@Service
public interface Question_Repo  extends JpaRepository<Question, Integer>
{

//	List<Question> findByQuestion(Quiz quiz);

	public List<Question> findByQuiz(Quiz quiz);

}
