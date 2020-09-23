package com.foodOnline.service;

import java.util.List;

import com.foodOnline.exception.BusinessException;
import com.foodOnline.model.FoodOnline;

public interface FoodOnlineService {
	
	public FoodOnline createFoodOnline(FoodOnline foodOnline);
	public List<FoodOnline> getAllFoodOnline();
	public FoodOnline getFoodOnlineById(int id) throws BusinessException;
	public void deleteFoodOnline(int id);
	public List<FoodOnline> getFoodOnlineByCategory(String category);
	public List<FoodOnline> getFoodOnlineByPrice(int price);
	public FoodOnline updateFoodOnline(FoodOnline foodOnline);
	
	
	

}
