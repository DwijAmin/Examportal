package com.example.demo;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.hibernate.usertype.UserType;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Component
public class Role
{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	    private int roleId;
	
	   @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY,mappedBy = "role")
	   @JsonIgnore
	
	   private Set<user_role> user_role = new HashSet<>();
	   
       private String rolename;
    
	public Role() {
		// TODO Auto-generated constructor stub
	}
	public String getRolename() {
		return rolename;
	}
	public void setRolename(String rolename) {
		this.rolename = rolename;
	}
	public int getRoleId() {
		return roleId;
	}
	public void setRoleId(int i) {
		this.roleId = i;
	}
	public Set<user_role> getUser_role() {
		return user_role;
	}
	public void setUser_role(Set<user_role> user_role) {
		this.user_role = user_role;
	}
	
}
