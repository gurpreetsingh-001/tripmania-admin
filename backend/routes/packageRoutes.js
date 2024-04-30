const express = require('express');
const jwtHandler = require('../utils/jwtHandler');
const { AddPackage, GetAllPackages, UpdatePackage, DeletePackage } = require('../controller/package.controller');

const packageRoutes = express.Router();

// Get all packages
packageRoutes.get('/view', GetAllPackages);

// Create a new package
packageRoutes.post('/add', jwtHandler,AddPackage);

// Update a package
packageRoutes.put('/:id', jwtHandler, UpdatePackage);

// Delete a package
packageRoutes.delete('/:id', jwtHandler, DeletePackage);

module.exports = packageRoutes;
