package com.foodOnline.service.impl;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodOnline.exception.BusinessException;
import com.foodOnline.model.FoodOnline;
import com.foodOnline.repository.FoodOnlineRepository;
import com.foodOnline.service.FoodOnlineService;
import org.springframework.transaction.annotation.Transactional;



@Transactional
@Service
public class FoodOnlineServiceImpl implements FoodOnlineService {

	@Autowired
	private FoodOnlineRepository repository;
	@Override
	public FoodOnline createFoodOnline(FoodOnline foodOnline) {
				return repository.save(foodOnline);
	}

	@Override
	public List<FoodOnline> getAllFoodOnline() {
		return repository.findAll();
	}

//	@Override
//	public FoodOnline getFoodOnlineById(int id)throws BusinessException {
//		FoodOnline fo=null;
//		if(id<0) {
//			throw new BusinessException("Id" +id +"is invalid");
//		}
//		try {
//			fo=repository.findById(id).get(id);
//		}catch(NoSuchElementException e){
//			throw new BusinessException("Id" +id +"is invalid");
//		}
//		return fo;
//		
//	}
	

	@Override
	public FoodOnline getFoodOnlineById(int id) throws BusinessException {
		FoodOnline s=null;
		if(id<0) {
			throw new BusinessException("Id "+id+" is invalid");
		}
		try {
			s=repository.findById(id).get();
     		}catch(NoSuchElementException e) {
     			throw new BusinessException("No message found with id"+id);
     		}
		return s;
	}


	@Override
	public void deleteFoodOnline(int id) {
		repository.deleteById(id);		
	}

	@Override
	public List<FoodOnline> getFoodOnlineByCategory(String category) {
		
		return repository.findByCategory(category);
	}

	@Override
	public List<FoodOnline> getFoodOnlineByPrice(int price) {
				return repository.findByPrice(price);
	}

	@Override
	public FoodOnline updateFoodOnline(FoodOnline foodOnline) {
			return repository.save(foodOnline);
	}

}
