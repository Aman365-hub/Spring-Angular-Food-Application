package com.foodOnline.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.foodOnline.exception.BusinessException;
import com.foodOnline.model.FoodOnline;
import com.foodOnline.service.FoodOnlineService;

@RequestMapping("/")
@RestController
@CrossOrigin(origins="http://localhost:4200/food-online-list")
public class FoodOnlineController {

	@Autowired
	private FoodOnlineService service;
	
	
	@PostMapping("/foodOnline")
	public FoodOnline createFoodOnline(@RequestBody FoodOnline foodOnline) {

		return service.createFoodOnline(foodOnline);
	}

	
	@GetMapping("/foodOnlines")
	public List<FoodOnline> getAllFoodOnline() {

		return service.getAllFoodOnline();
	}

	
	@GetMapping("/foodOnline/{id}")
	public ResponseEntity<FoodOnline> getFoodOnlineById(@PathVariable("id") int id) throws BusinessException {
		try {
			return new ResponseEntity<FoodOnline>(service.getFoodOnlineById(id), HttpStatus.OK);
		}catch(BusinessException e) {
			return new ResponseEntity<FoodOnline>(HttpStatus.NOT_FOUND);
}
	}

	
	@DeleteMapping("/foodOnline/{id}")
	public void deleteFoodOnline(@PathVariable("id") int id) {
		service.deleteFoodOnline(id);
	}

	
	@GetMapping("/foodOnlinebycategory/{category}")

	public List<FoodOnline> getFoodOnlineByCategory(@PathVariable("category")String category) {

		return service.getFoodOnlineByCategory(category);
	}

	
	@GetMapping("/foodOnlinebyprice/{price}")
	public List<FoodOnline> getFoodOnlineByPrice(@PathVariable("price")int price) {

		return service.getFoodOnlineByPrice(price);
	}

	
	@PutMapping("/foodOnline")
	public FoodOnline updateFoodOnline(@RequestBody FoodOnline foodOnline) {

		return service.updateFoodOnline(foodOnline);
	}

}
