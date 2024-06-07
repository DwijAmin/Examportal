package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.Question;
import com.example.demo.Quiz;
import com.example.demo.Result;
import com.example.demo.Result_repo;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Result;
import com.example.demo.Result_repo;
import com.example.demo.Role;
import com.example.demo.user_role;
import com.example.demo.users;
import com.example.demo.servoce.UserService;

@RestController
@RequestMapping("/result")
@ComponentScan({ "com.example.demo.controller","com.example.demo.servoce" ,"repository","com.example.demo"})
public class Result_controller {
	@Autowired
	private Result_repo result_repo;
	
	@PostMapping("/")
	@CrossOrigin(origins = "http://localhost:3000")
	public Result getresult1(@RequestBody Result users) {
		return this.result_repo.save(users);
		
	}
	
	@GetMapping("/Cat/{cid}")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Result> getQuizbase_on_Category(@PathVariable int cid){
		Quiz quiz = new Quiz();
		quiz.setQid(cid);
		
		return this.result_repo.findByQuiz(quiz);
		
	}
}
