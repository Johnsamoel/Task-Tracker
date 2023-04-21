const express = require('express');

const router = express.Router();


router.use((req , res) => {
    res.status(404).json({message : 'Not Found'});
})

module.exports = router;