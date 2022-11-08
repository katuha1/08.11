const
    express = require("express"),
    router = express.Router();

router.route('/users')
    .get((req, res) => {...})
    .post((req, res) => {...})
    .put((req, res) => {...})
    .delete((req, res) => {...});

module.exports = router;