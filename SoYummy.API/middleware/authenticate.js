// kod, który tu był, w żaden sposób nie weryfikował poprawności tokena, jedynie sprawdzał czy ten token jest i próbował go odkodować, po czym nic z nim nie robił
require('dotenv').config()
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')
const SECRET = process.env.SECRET
const User = require('../models/user')

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: SECRET,
}

passport.use(
	new JwtStrategy(opts, (payload, done) => {
		User.findOne({ _id: payload.id })
			.then(user => {
				if (!user) {
					return done(new Error('User not found'))
				}
				return done(null, user)
			})
			.catch(err => done(err))
	})
)

/**
 * Funkcja autentykacji użytkownika na podstawie bearer token
 */
const authenticate = (req, res, next) => {
	passport.authenticate('jwt', { session: false }, (err, user) => {
		const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null
		if (!user || !token || user.token !== token || err) {
			return res.status(401).json({
				status: 'error',
				code: 401,
				message: 'Not authorized',
			})
		}
		req.user = user
		next()
	})(req, res, next)
}

module.exports = authenticate
