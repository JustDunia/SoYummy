const mongoose = require('mongoose')
const { Schema, model } = mongoose
const bCrypt = require('bcrypt')
const { ObjectId, String, Boolean } = Schema.Types

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
		isSubscriber: {
			type: Boolean,
			default: false,
		},
		favorites: {
			type: [
				{
					type: ObjectId,
					ref: 'Recipes',
				},
			],
		},
		shoppingList: [
			{
				ingredient: {
					// ObjectId jest już wyżej pobrany, nie trzeba pisać całej ścieżki
					// type: Schema.Types.ObjectId,
					type: ObjectId,
					// składnik powinien mieć odwolanie do kolekcji składnikówa nie do 'Recipe'
					// ref: 'Recipe'
					ref: 'Ingredients',
				},
				// w przepisach jest measure więc już trzymałabym się tej wersji
				// quantity: {
				measure: {
					// w przepisch ilość jest stringiem (to nie tylko liczby, może być np. '2 tbs')
					// type: Number,
					type: String,
				},
			},
		],
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

module.exports = User
