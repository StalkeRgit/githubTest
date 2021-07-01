const express = require('express');
const router = express.Router();
const stundenplan = require('../controllers/stundenplan.controller');

router.get('/', async (req, res) => {
  console.log(`Aufruf auf: ${req.originalUrl}`);
  if (req.query.name && req.query.weekday) {
    const data = {
      name: req.query.name,
      weekday: req.query.weekday,
      start: req.query.start,
      end: req.query.end,
    }
    await stundenplan.create(data);
    return res.redirect(req.originalUrl.split('?').shift());
  }
  const list = await stundenplan.findAll();
  res.send(list);
});

router.get('/about', async (req, res) => {
  res.render('about', { title: 'about' });
});

router.get('/create', (req, res) => {
  res.render('createpost');
});

router.post('/create', async (req, res) => {
  console.log(`Aufruf auf: ${req.originalUrl}`);
  const data = {
    name: req.body.name,
    weekday: req.body.weekday,
    start: req.body.start,
    end: req.body.end,
  }
  const newpost = await stundenplan.create(data);
  res.send(newpost);
});

router.get('/:postId', async (req, res) => {
  console.log(`Aufruf auf: ${req.originalUrl}`);
  const post = await stundenplan.find(req.params.postId);
  res.send(post);
});

router.post('/update/:postId', async (req, res) => {
  console.log(`Aufruf auf: ${req.originalUrl}`);
  const update = {
    name: req.body.name,
    weekday: req.body.weekday,
    start: req.body.start,
    end: req.body.end,
  }
  const updatedPost = await stundenplan.update(req.params.postId, update);
  res.send(updatedPost);
});

router.get('/delete/:postId', async (req, res) => {
  console.log(`Aufruf auf: ${req.originalUrl}`);
  await stundenplan.remove(req.params.postId);
  const list = await stundenplan.findAll();
  res.send(list);
});

module.exports = router;
