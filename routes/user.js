const express = require('express');

const fetchingExerciseSController = require('../controllers/fetching-exercise(s)');

const fetchingMealSController = require('../controllers/fetching-meal(s)');

const isAuth = require('../middleware/is-auth');

const router = express.Router();

//Exercise Routes
router.get('/chest/exercises', fetchingExerciseSController.getChestExercises);

router.get('/arm/exercises', fetchingExerciseSController.getArmExercises);

router.get('/leg/exercises', fetchingExerciseSController.getLegExercises);

router.get('/back/exercises', fetchingExerciseSController.getBackExercises);

router.get('/shoulder/exercises', fetchingExerciseSController.getShoulderExercises);

router.get('/exercise/:exerciseId', fetchingExerciseSController.getExerciseById);

router.post('/add-exercise-to-wourkoutplan/:exerciseId',isAuth, fetchingExerciseSController.postWorkoutPlan);

router.get('/workoutplan',isAuth, fetchingExerciseSController.getWorkoutPlan);

router.post('/wourkoutplan-delete-exercise/:exerciseId',isAuth, fetchingExerciseSController.postWorkoutDeleteExercise);


//Meals Routes
router.get('/meals', fetchingMealSController.getMeals);

router.get('/meal/:mealId', fetchingMealSController.getMealById);

router.post('/add-meal-to-nutritionPlan/:mealId', isAuth, fetchingMealSController.postNutritionPlan);

router.post('/delete-meal-from-nutritionPlan/:mealId', isAuth, fetchingMealSController.postNutritionDeleteMeal);

router.get('/nutritionplan', isAuth, fetchingMealSController.getNutritionPlan)


module.exports = router;
