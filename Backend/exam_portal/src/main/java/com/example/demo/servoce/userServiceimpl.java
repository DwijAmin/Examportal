package com.example.demo.servoce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.User_repo;
import com.example.demo.userdetalis;
import com.example.demo.users;

@Service
@ComponentScan("com.example.demo")
public class userServiceimpl  implements UserDetailsService{

	@Autowired
	private User_repo user_repo;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		users user = this.user_repo.findByUsername(username);
		//System.out.println(user.toString());
		return new userdetalis(user) ;
	}

}
