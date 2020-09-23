package com.foodOnline.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.foodOnline.model.User;

public interface UserRepoistory extends JpaRepository<User,Integer>{
	
	
	public User findByUname(String uname);
	
	
	

}
