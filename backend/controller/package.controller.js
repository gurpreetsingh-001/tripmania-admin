const packageModel = require('../models/packageModel');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Specify the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // Use the original file name as the saved file name
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true); // Accept the file if it's an image
    } else {
        cb(new Error('Only images are allowed'), false); // Reject the file if it's not an image
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter }).array('images', 5); // Accept up to 5 images


const AddPackage = async (req, res) => {
    try {
        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(400).json({ message: 'Error uploading files' });
            } else if (err) {
                return res.status(500).json({ message: 'Internal server error' });
            }

            const {
                categoryId,
                packageName,
                price,
                specialPrice,
                packageUSP,
                description,
                enabled,
                timeSlots
            } = req.body;

            const images = req.files.map(file => file.path); // Get the paths of the uploaded images

            const package = new Package({
                categoryId,
                packageName,
                images,
                price,
                specialPrice,
                packageUSP,
                description,
                enabled,
                timeSlots
            });

            await package.save();
            res.status(201).json({ message: 'Package created successfully' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const GetAllPackages = async (req, res) => {
    try {
        const packages = await Package.find();
        res.json(packages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const UpdatePackage = async (req, res) => {
    try {
        const updatedPackage = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPackage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const DeletePackage = async (req, res) => {
    try {
        await Package.findByIdAndDelete(req.params.id);
        res.json({ message: 'Package deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports = { AddPackage, GetAllPackages, UpdatePackage, DeletePackage }