const mongoose = require('mongoose');
const { Schema } = mongoose;
const categorySchema = new Schema({
    categoryName: { 
        type: String,
         required: true 
        },
    categoryDescription: { 
        type: String, 
        required: true
     }
});

const categoryModel = mongoose.model('Category', categorySchema);

module.exports = categoryModel;
