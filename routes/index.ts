import express from 'express';
var router = express.Router();
import sum from '../controller/number';

router.get('/to', function(req, res, next) {
  res.send({"to":sum(req.query.num)});
});

export default router;
