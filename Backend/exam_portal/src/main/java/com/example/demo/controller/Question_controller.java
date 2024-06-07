package com.example.demo.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Category;
import com.example.demo.Question;
import com.example.demo.Question_Repo;
import com.example.demo.Question_impl;
import com.example.demo.Quiz;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/question")
public class Question_controller
{

	@Autowired
	private Question question;
	@Autowired
	private Question_impl question_impl;
	@Autowired
	private Question_Repo question_Repo;
	
	@PostMapping("/")
	public ResponseEntity<?> addQuestion(@RequestBody Question question) {
		 
		 Question question1	= this.question_impl.addQuestion(question);
			return ResponseEntity.ok(question1);
		
	}
	@GetMapping("/allquestons")
	public ResponseEntity<?> getallquestios(){
		return ResponseEntity.ok(question_impl.getQuestions());
		
	}
	@GetMapping("/Cat/{cid}")
	public List<Question> getQuizbase_on_Category(@PathVariable int cid){
		Quiz quiz = new Quiz();
		quiz.setQid(cid);
		return this.question_impl.findByQuestion(quiz);
		
	}
	@GetMapping("/{Qid}")
	public Question getQuestion(@PathVariable int Qid){
		
		return  this.question_impl.getQuestion(Qid);
		
	}
	@RequestMapping(value = "/put", method = RequestMethod.PUT)
	public Question Updatequestion(@RequestBody Question question){
		
		return  this.question_impl.updateQuestion(question);
		
		
	}
	
	@DeleteMapping("/{Qid}")
	public void deletquestion(@PathVariable int Qid) {
		System.out.println(Qid);
		this.question_Repo.deleteById(Qid);
	//	this.question_impl.deleteQuestion(10);
		
	}

}
