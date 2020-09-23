package com.foodOnline.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.foodOnline.model.User;

import com.foodOnline.repository.UserRepoistory;
import com.foodOnline.service.UserService;

@Transactional
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepoistory repo;

	@Override
	public User createUser(User user) {
		return repo.save(user);
	}

	@Override
	public void validateUser(String uname, String pwd) {
		
		User un;
		un=repo.findByUname(uname);
		while (true) {
		if(un.getPwd().equalsIgnoreCase(pwd)){
				System.out.println("successful");
				break;}
		else {
		 System.out.println("failed");	
		 break;
		}
		}

		
	}
}

		



