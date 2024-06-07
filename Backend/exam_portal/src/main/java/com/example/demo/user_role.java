package com.example.demo;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;



@Entity
@Component
public class user_role {

	
	private static final CascadeType MERGE = null;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userroleid;

	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
	@JsonIgnore
	private users users;
	
	@ManyToOne(fetch = FetchType.EAGER,cascade=CascadeType.ALL)
	@JsonInclude
	private Role role;

	public user_role() {
		
	}

	public int getUserroleid() {
		return userroleid;
	}

	public void setUserroleid(int userroleid) {
		this.userroleid = userroleid;
	}

	public users getUsers() {
		return users;
	}

	public void setUsers(users users) {
		this.users = users;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}
	
}
