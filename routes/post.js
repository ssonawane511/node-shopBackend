const express = require("express");
const router = express.Router();

/*
API functions

GET index           /posts
GET new             /posts/new
POST create         /posts
GET show            /posts/:id
GET edit            /posts/:id/edit
PUT update          /posts/:id
DELETE destroy      /posts/:id
*/

/* GET post*/
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Surf Shop - home'})
})

router.get('/new', (req, res, next) => {
    res.send('post new')
})

router.post('/', (req, res, next) => {
    res.send('post create')
})

router.get('/:id', (req, res, next) => {
    res.send('post get show')
})

router.get('/:id/edit', (req, res, next) => {
    res.send('post get edit')
})

router.put('/:id', (req, res, next) => {
    res.send('put update')
})

router.delete('/:id', (req, res, next) => {
    res.send('delete destroy')
})

module.exports = router;