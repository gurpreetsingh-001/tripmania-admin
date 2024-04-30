const mongoose = require('mongoose');
const { Schema } = mongoose;
const packageSchema = new Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    packageName: {
         type: String,
          required: true 
        },
    images: [String],
    price: { 
        type: Number, 
        default: 0 
    },
    specialPrice: { 
        type: Number, 
        default: 0 
    },
    packageUSP: String,

    description: String,

   

    enabled: {
         type: Boolean,
          default: true 
        },
    timeSlots: [String] // Example, can be adjusted as per requirement
});

const packageModel = mongoose.model('Package', packageSchema);

module.exports = packageModel;
