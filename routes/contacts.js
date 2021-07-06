const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contacts');

// @route  GET api/contacts
// @desc   Get all user's contacts
// @access Private
router.get('/', auth, (req, res) => {
	try {
		const
	} catch (err) {

	}
});

// @route  POST api/contacts
// @desc   Add a new contact
// @access Private
router.post('/', (req, res) => {
	res.send('Add a new contact');
});

// @route  PUT api/contacts/:id
// @desc   Update contact
// @access Private
router.put('/:id', (req, res) => {
	res.send('Update contact');
});

// @route  DELETE api/contacts/:id
// @desc   Delete contact
// @access Private
router.delete('/:id', (req, res) => {
	res.send('Delete contact');
});

module.exports = router;
