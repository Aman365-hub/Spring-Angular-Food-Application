package com.foodOnline.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodOnline.model.FoodOnline;

@Repository
public interface FoodOnlineRepository extends JpaRepository<FoodOnline,Integer>{
	
	public List<FoodOnline> findByCategory(String category);
	public List<FoodOnline> findByPrice(int	price);
	

	

}
