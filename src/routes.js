const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.status(200).send({
    title: "Ciencia Popular API",
    version: "0.0.1"
  });
});

module.exports = router;