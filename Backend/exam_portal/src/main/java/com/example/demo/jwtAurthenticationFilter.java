package com.example.demo;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.demo.servoce.userServiceimpl;

@Component
public class jwtAurthenticationFilter extends OncePerRequestFilter

{
	@Autowired
	private userServiceimpl userdetails_Service;
	
	@Autowired
	private Jwtutil jwtutil;
	
		
	    @Override
	    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
	            throws ServletException, IOException {

	        final String authorizationHeader = request.getHeader("Authorization");

	      
	        String username = null;
	        String jwt = null;

	        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
	            jwt = authorizationHeader.substring(7);
	            username = jwtutil.extractUsername(jwt);
	            System.out.println(username);
	        }


	        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {

	            UserDetails userDetails = this.userdetails_Service.loadUserByUsername(username);

	            if (jwtutil.validateToken(jwt, userDetails)) {

	                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
	                        userDetails, null, userDetails.getAuthorities());
	                usernamePasswordAuthenticationToken
	                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
	                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
	            }
	        }
	        chain.doFilter(request, response);
	    }
}