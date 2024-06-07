package com.example.demo;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface Category_service {


	public Category addCategory( Category category);

	public Category updateCategory( Category category);
	
	public void deleteCategory( int cid);
	
	public List<Category> getCategories();


	public Category getCategory(int cid);

}
