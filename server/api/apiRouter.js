const express = require('express');
const router = express.Router();

// Handle routes

router.get('*', (req, res) => {
    res.send('Bad Request')
})

module.exports = router;