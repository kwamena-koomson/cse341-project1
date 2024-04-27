const router = require('express').Router();

router.get('/', (req, res) => { // Add parentheses around req, res
  res.send('Hello World');
});

module.exports = router;
