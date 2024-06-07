package com.example.demo;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class Question_impl implements Question_service
{
	@Autowired
	private Question_Repo question_Repo;

	public Question addQuestion(Question Question) {
		// TODO Auto-generated method stub
		return this.question_Repo.save(Question);
	}


	@Override
	public Question updateQuestion(Question question) {
		// TODO Auto-generated method stub
		return this.question_Repo.save(question);
	}


	@Override
	public List<Question> getQuestions() {
		// TODO Auto-generated method stub
		return (List<Question>) this.question_Repo.findAll();
	}

	@Override
	public Question getQuestion(int Qid) {
		// TODO Auto-generated method stub
		return this.question_Repo.findById(Qid).get();
	}

	@Override
	public List<Question> findByQuestion(Quiz quiz) {
		// TODO Auto-generated method stub
		return (List<Question>)this.question_Repo.findByQuiz(quiz);
	}


	@Override
	public void deleteQuestion(int Qid) {
		// TODO Auto-generated method stub
		
	}

	

}
