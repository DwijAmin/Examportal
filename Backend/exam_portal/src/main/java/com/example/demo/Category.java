package com.example.demo;

import java.util.LinkedHashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Service
public class Category 
{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cid;
	private String title;
	private String description;
	@OneToMany(mappedBy = "category" , cascade = CascadeType.ALL ,fetch = FetchType.EAGER)
	@JsonIgnore
	private Set<Quiz> quiz = new LinkedHashSet<>() ; 
	public Category() {
		// TODO Auto-generated constructor stub
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Category(int cid, String title, String description) {
		super();
		this.cid = cid;
		this.title = title;
		this.description = description;
	}
	
}
