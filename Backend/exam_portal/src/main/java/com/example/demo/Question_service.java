package com.example.demo;

import java.util.List;
import java.util.Set;

public interface Question_service 
{


	public Question addQuestion(Question Question);

	public Question updateQuestion(Question Question);
	
	
	
	public List<Question> getQuestions();
	
	public List<Question> findByQuestion (Quiz quiz);


	public Question getQuestion(int Qid);


	public void deleteQuestion(int Qid);
	
}
