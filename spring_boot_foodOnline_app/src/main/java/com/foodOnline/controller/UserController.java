package com.foodOnline.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodOnline.model.FoodOnline;
import com.foodOnline.model.User;
import com.foodOnline.service.FoodOnlineService;
import com.foodOnline.service.UserService;

@RequestMapping("/")
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserService us;
	
	
	@PostMapping("/add-user")
	public User createFoodOnline(@RequestBody User user) {

		return us.createUser(user);
	}

	@GetMapping("/validate-user/{uname}/{pwd}")

	public void getFoodOnlineByCategory(@PathVariable("uname")String uname,@PathVariable("pwd") String pwd) {

//		List<User> user;
		us.validateUser(uname, pwd);
		
		
			}
	

}
