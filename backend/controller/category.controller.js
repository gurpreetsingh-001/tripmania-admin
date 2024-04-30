const categoryModel = require('../models/categoryModel');

const ViewAllCategories = async (req, res) => {
    try {
        const categories = await categoryModel.find();
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const AddCategory = async (req, res) => {
    try {
        const { categoryName, categoryDescription } = req.body;
        // Check if a category with the same name already exists
        const existingCategory = await categoryModel.findOne({ categoryName });
        if (existingCategory) {
            return res.status(202).json({ message: 'Category already exists in Database' });
        }
        const category = new categoryModel({ categoryName, categoryDescription });
        await category.save();
        res.status(201).json({ message: 'Category created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


const DeleteCategory = async (req, res) => {
    try {
        await categoryModel.findByIdAndDelete(req.params.id);
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports ={ViewAllCategories,AddCategory,DeleteCategory}
