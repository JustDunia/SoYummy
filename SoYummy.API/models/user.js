const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
	// other user information fields
})

const User = mongoose.model('User', userSchema)

const newsletterSubscriberSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
})

const NewsletterSubscriber = mongoose.model('NewsletterSubscriber', newsletterSubscriberSchema)

module.exports = { User, NewsletterSubscriber }
