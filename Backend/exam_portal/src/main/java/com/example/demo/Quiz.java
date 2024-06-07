package com.example.demo;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Component
public class Quiz 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
	private int qid;

	@ManyToOne(fetch =  FetchType.EAGER)
	private Category category;
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public Set<Question> getQuestion() {
		return question;
	}
	public void setQuestion(Set<Question> question) {
		this.question = question;
	}
	public Set<Result> getResult() {
		return result;
	}
	public void setResult(Set<Result> result) {
		this.result = result;
	}
	private String title;
	private String description;
	private int maxmarks;
	private int numberofquestion;
	private boolean active = false;
	 @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY,mappedBy = "quiz")
	 @JsonIgnore
	 private Set<Question> question = new HashSet<>();
	    
	    
	@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY,mappedBy = "quiz")
	@JsonIgnore
	 private Set<Result> result = new HashSet<>();
	    
	public Quiz() {
	
	}
	public int getMaxmarks() {
		return maxmarks;
	}
	public void setMaxmarks(int maxmarks) {
		this.maxmarks = maxmarks;
	}
	public int getNumberofquestion() {
		return numberofquestion;
	}
	public void setNumberofquestion(int numberofquestion) {
		this.numberofquestion = numberofquestion;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	public int getQid() {
		return qid;
	}
	public void setQid(int qid) {
		this.qid = qid;
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

	

}
