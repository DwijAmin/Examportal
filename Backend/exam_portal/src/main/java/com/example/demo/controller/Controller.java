package com.example.demo.controller;

import java.util.HashSet;
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
@RequestMapping("/user")
@ComponentScan({ "com.example.demo.controller","com.example.demo.servoce" ,"repository","com.example.demo"})
public class Controller
{

	@Autowired
	private Role role; 
	@Autowired
	private user_role ur;
	
	@Autowired
	private UserService userservice;
	@PostMapping("/")
	public users createuser(@RequestBody users users) {
		
		Set<user_role> roles = new HashSet<>();
		System.out.println("hello");
	//	userservice.createUser(users, null);
		role.setRolename("Normal");
	//	role.setRoleId(45);
		ur.setRole(role);
		ur.setUsers(users);
		roles.add(ur);
		return this.userservice.createUser(users,roles);
		
	}
	
	
	@GetMapping("/{username}")
	@CrossOrigin(origins = "http://localhost:3000")
	public users getusers(@PathVariable("username") String username) {
		return this.userservice.getusers(username);
		
	}
	@DeleteMapping("/{userid}")
	public void deleteusers(@PathVariable("userid") int userid) {
		this.userservice.deleteusers(userid);
		
	}
	
	
	
}
