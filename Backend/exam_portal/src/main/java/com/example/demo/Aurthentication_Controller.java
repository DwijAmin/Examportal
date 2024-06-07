package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.servoce.userServiceimpl;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Aurthentication_Controller 
{

	@Autowired
	private userdetalis userDetalis;
	@Autowired
	private AuthenticationManager AuthenticationManager;
	@Autowired
	private userServiceimpl userServiceImpl; 
	@Autowired
	private Jwtutil jwtutill;
	
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
		try {
		AuthenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
		}
		catch(BadCredentialsException e){
			throw new Exception("incorrect");
		}
		final UserDetails userDetails =  userServiceImpl
				.loadUserByUsername(authenticationRequest.getUsername());
		System.out.println(userDetails);
		final String token = jwtutill.generateToken(userDetails);
		System.out.println(token);
		return ResponseEntity.ok(new JwtResponse(token));
	}
	/*@PostMapping("/generayr-token")
	//@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
		try {
		AuthenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
		}
		catch(BadCredentialsException e){
			throw new Exception("incorrect");
		}
		final UserDetails userDetails = userServiceImpl
				.loadUserByUsername(authenticationRequest.getUsername());
		System.out.println(userDetails.toString());
		final String token = jwtutill.generateToken(userDetails);
		System.out.println(token);
		return ResponseEntity.ok(new JwtResponse(token));
	}
	*/	
	private void authenticate(String username , String password) throws Exception {
		try {
			AuthenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
		}
		catch(DisabledException e){
			
			throw new Exception("disable");
		}
		
	}
}
