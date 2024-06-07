package com.example.demo;

import java.util.List;
import java.util.Set;

public interface Quiz_service
{

	public Quiz addQuiz(Quiz quiz);

	public Quiz updateQuiz( Quiz quiz);
	
	public void deleteQuiz(int qid);
	
	public List<Quiz> getquizs();

	
	public Quiz getQuiz(int qid);

	public List<Quiz> getQuizbase_on_Category(Category category);

//	public	List<Question> getQuizbase_on_Question(int Qid);

	//List<Question> getQuizbase_on_Question(Question question);

	public List<Quiz> getQuizbase_on_Question(Question question);

	
	
}
