const bannerModel = require('../models/bannersModel');

const updateTopBanner = async (req, res) => {
    try {
        const { path } = req.file;
        await Banner.findOneAndUpdate({ name: 'topBanner' }, { imagePath: path });
        res.status(200).json({ message: 'Top banner updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const updateMiddleBanner = async (req, res) => {
    try {
        const { path } = req.file;
        await Banner.findOneAndUpdate({ name: 'middleBanner' }, { imagePath: path });
        res.status(200).json({ message: 'Middle banner updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const updateFooterBanner = async (req, res) => {
    try {
        const { path } = req.file;
        await Banner.findOneAndUpdate({ name: 'footerBanner' }, { imagePath: path });
        res.status(200).json({ message: 'Footer banner updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};





module.exports = { updateTopBanner,updateMiddleBanner,updateFooterBanner };
