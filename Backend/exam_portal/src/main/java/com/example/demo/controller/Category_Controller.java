package com.example.demo.controller;

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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Category;
import com.example.demo.Category_impl;

@RestController
@RequestMapping("/Category")
@CrossOrigin(origins = "http://localhost:3000")
public class Category_Controller {

	@Autowired
	private Category category;
	@Autowired
	private Category_impl category_impl;
	
	@PostMapping("/")
	public ResponseEntity<?> addCategory(@RequestBody Category category) {
		 
			Category category1	= this.category_impl.addCategory(category);
			return ResponseEntity.ok(category1);
		
	}
	@GetMapping("/allcategories")
	public ResponseEntity<?> getallCategories(){
		return ResponseEntity.ok(category_impl.getCategories());
		
	}
	@GetMapping("/{cid}")
	public Category getCategory(@PathVariable int cid){
		return  this.category_impl.getCategory(cid);
		
	}
	@PutMapping("/")
	public Category UpdateCategory(@RequestBody Category category){
		return  this.category_impl.updateCategory(category);
		
	}
	
	@DeleteMapping("/{cid}")
	public void deletCategory(@PathVariable int cid) {
		this.category_impl.deleteCategory(cid);
		
	}

}
