package com.example.demo.servoce;

import java.util.Set;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.example.demo.Role;
import com.example.demo.Role_repository;
import com.example.demo.User_repo;
import com.example.demo.users;



@Component
@ComponentScan({ "com.example.demo.controller","com.example.demo.servoce" ,"repository","com.example.demo"})

@Service
public class UserService
{
	@Autowired
	private users users;
	
	@Autowired
	private Role roles;
	@Autowired
	private User_repo user_role;
	@Autowired
	private User_repo repo;
	@Autowired
	private Role_repository role;
	public users createUser(users Users,Set<com.example.demo.user_role> user_role) {
		users local  = this.repo.findByUsername(users.getUsername());
		if(local!= null) {
			System.out.println("user already there");
		}
		else {
		for(com.example.demo.user_role ur : user_role) {
			role.save(ur.getRole());
		}
		
		users.getUser_role().addAll(user_role);
		local  = this.repo.save(users);
		}
		return local;
		
	}

	public users getusers(String username) {
		
		return repo.findByUsername(username);
		
	}
    public void deleteusers(int id) {
		
		repo.deleteById(id);
		
	}
 


}
