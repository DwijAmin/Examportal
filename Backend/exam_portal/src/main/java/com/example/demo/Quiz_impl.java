package com.example.demo;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class Quiz_impl implements Quiz_service
{
	@Autowired
	private quiz_Repo quiz_repo;

	@Override
	public Quiz addQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return quiz_repo.save(quiz);
	}
	@Override
	public Quiz updateQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return this.addQuiz(quiz);
	}

	@Override
	public void deleteQuiz(int qid) {
		// TODO Auto-generated method stub
		this.quiz_repo.deleteById(null);
	}

	@Override
	public List<Quiz> getquizs() {
		// TODO Auto-generated method stub
		return  this.quiz_repo.findAll();
	}

	@Override
	public Quiz getQuiz(int qid) {
		// TODO Auto-generated method stub
		return this.quiz_repo.findById(qid).get();
	}


	@Override
	public List<Quiz> getQuizbase_on_Category(Category category) {
		// TODO Auto-generated method stub
		return (List<Quiz>)this.quiz_repo.findBycategory(category);
	}
	
	
	
	@Override
	public List<Quiz> getQuizbase_on_Question(Question question) {
		// TODO Auto-generated method stub
		return this.quiz_repo.findByquestion(question);
	}
	

	


}
