package com.example.demo;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

@Service
public class Category_impl implements Category_service
{

	@Autowired
	private Category_Repo category_Repo;
	@Autowired
	private Category category;
	@Override
	public Category addCategory(Category category) {
		// TODO Auto-generated method stub
		
		return category_Repo.save(category);
	}

	@Override
	public Category updateCategory(Category category) {
		// TODO Auto-generated method stub
		return category_Repo.save(category);
	}

	@Override
	public void deleteCategory( int cid) {
		// TODO Auto-generated method stub
		this.category_Repo.deleteById(cid);
	}

	@Override
	public List<Category> getCategories() {
		// TODO Auto-generated method stub
		return  this.category_Repo.findAll();
	}

	@Override
	public Category getCategory(int cid) {
		// TODO Auto-generated method stub
		return this.category_Repo.findById(cid).get();
	}

}
