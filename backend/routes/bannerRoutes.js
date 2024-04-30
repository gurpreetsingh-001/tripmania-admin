const express = require('express');
const multer = require('multer');
const { updateTopBanner , updateMiddleBanner, updateFooterBanner} = require('../controller/banner.controller');


const bannerrouter = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
const upload = multer({ storage: storage }).single('topBanner');
const uploadF = multer({ storage: storage }).single('footerBanner');
const uploadM = multer({ storage: storage }).single('middleBanner');

bannerrouter.post('/update-middle-banner', uploadM, updateMiddleBanner);
bannerrouter.post('/update-top-banner', upload, updateTopBanner);
bannerrouter.post('/update-footer-banner', uploadF, updateFooterBanner);

module.exports = bannerrouter;
