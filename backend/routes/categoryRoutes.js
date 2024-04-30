const express = require('express');
const Category = require('../models/categoryModel');
const jwtHandler = require('../utils/jwtHandler');
const { ViewAllCategories, AddCategory, DeleteCategory } = require('../controller/category.controller');

const categoryRoutes = express.Router();

// Get all categories
categoryRoutes.get('/view', ViewAllCategories)

// Create a new category
categoryRoutes.post('/add', jwtHandler, AddCategory);

// Delete a category
categoryRoutes.delete('/delete:id', jwtHandler, DeleteCategory);

module.exports = categoryRoutes;
