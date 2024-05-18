package com.github.mohajel.IE.CA5.database;

import com.github.mohajel.IE.CA5.models.Restaurant;
import com.github.mohajel.IE.CA5.utils.HibernateDatabaseUtil;
import jakarta.persistence.EntityManager;

import java.util.List;

public class RestaurantDAO {

    private static EntityManager getEntityManager() {
        return HibernateDatabaseUtil.getEntityManager();
    }

    public static void addRestaurant(Restaurant restaurant) {
        EntityManager entityManager = getEntityManager();
        entityManager.getTransaction().begin();
        entityManager.persist(restaurant);
        entityManager.getTransaction().commit();
        entityManager.close();
    }

    // Search
    public static Restaurant findRestaurantByName(String name) {
        EntityManager entityManager = getEntityManager();
        Restaurant restaurant = entityManager.find(Restaurant.class, name);
        entityManager.close();
        return restaurant;
    }

    public static List<Restaurant> getRestaurantsByManagerUserName(String managerUserName) {
        EntityManager entityManager = getEntityManager();
        List<Restaurant> restaurants;
        restaurants = entityManager.createQuery("SELECT r FROM Restaurant r WHERE r.managerUserName = :managerUserName", Restaurant.class)
                .setParameter("managerUserName", managerUserName)
                .getResultList();
        entityManager.close();
        return restaurants;
    }

    public static List<Restaurant> getRestaurantsByType(String restaurantType) {
        EntityManager entityManager = getEntityManager();
        List<Restaurant> restaurants;
        restaurants = entityManager.createQuery("SELECT r FROM Restaurant r WHERE r.type = :restaurantType", Restaurant.class)
                .setParameter("restaurantType", restaurantType)
                .getResultList();
        entityManager.close();
        return restaurants;
    }
}
