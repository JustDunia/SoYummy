const mongoose = require('mongoose')
const { Schema, model } = mongoose
const bCrypt = require('bcrypt')

const userSchema = new Schema(
	{
		password: {
			type: String,
			required: [true, 'Password is required'],
		},
		username: {
			type: String,
			required: [true, 'Username is required'],
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			unique: true,
		},
		token: {
			type: String,
			default: null,
		},
	},
	{ versionKey: false, timestamps: true }
)

userSchema.methods.setPassword = function (password) {
	this.password = bCrypt.hashSync(password, bCrypt.genSaltSync(6))
}
userSchema.methods.validatePassword = function (password) {
	return bCrypt.compareSync(password, this.password)
}

const User = model('User', userSchema)

const newsletterSubscriberSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
})

const NewsletterSubscriber = mongoose.model('NewsletterSubscriber', newsletterSubscriberSchema)

module.exports = { User, NewsletterSubscriber }
