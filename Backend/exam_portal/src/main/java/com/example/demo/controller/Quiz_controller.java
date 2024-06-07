
package com.example.demo.controller;

import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Category;
import com.example.demo.Question;
import com.example.demo.Quiz;
import com.example.demo.Quiz_impl;
import com.example.demo.quiz_Repo;

@RestController
@RequestMapping("/Quiz")
@CrossOrigin(origins = "http://localhost:3000")
public class Quiz_controller 
{
	@Autowired
	private Quiz_impl quiz_impl;

	@Autowired
	private Question question;
	@Autowired
	private quiz_Repo quiz_repo;
	@Autowired
	private Quiz quiz;
	@PostMapping("/")
	public ResponseEntity<?> addQuiz(@RequestBody Quiz quiz) {
		 
		 Quiz quiz1	= quiz_impl.addQuiz(quiz);
			return ResponseEntity.ok(quiz1);
		
	}
	@GetMapping("/allquizes")
	public ResponseEntity<?> getallquestios(){
		return ResponseEntity.ok(quiz_impl.getquizs());
		
	}
	@GetMapping("/{qid}")
	public Quiz getQuestion(@PathVariable int qid){
		return  this.quiz_impl.getQuiz(qid);
		
	}
	@PutMapping("/")
	public Quiz updateQuiz(@RequestBody Quiz quiz){
		return  this.quiz_impl.updateQuiz(quiz);
		
		
	}
	
	@DeleteMapping("/{qid}")
	public void deletQuiz(@PathVariable int qid) {
		this.quiz_impl.deleteQuiz(qid);
		
	}
	@GetMapping("/Cat/{cid}")
	public List<Quiz> getQuizbase_on_Category(@PathVariable int cid){
		Category category = new Category();
		category.setCid(cid);
		return  (List<Quiz>) this.quiz_impl.getQuizbase_on_Category(category);
		
	}
	

}
