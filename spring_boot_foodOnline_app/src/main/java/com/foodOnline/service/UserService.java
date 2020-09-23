package com.foodOnline.service;

import com.foodOnline.model.User;

public interface UserService {
	
	public User createUser(User user);
	public void validateUser(String uname,String pwd);
	

}
