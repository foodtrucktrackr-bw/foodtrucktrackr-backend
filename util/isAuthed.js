const jwt = require("jsonwebtoken");

const isAuthed = ()=> {

	return async (req, res, next) => {

		const authError = {
			  message: 'Please Login'
		}

		console.log(req.headers.authed);

		try {
			const token = req.headers.authed;
			if (!token) {
				return res.status(401).json(authError)
			}

			jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
				if (err) {
					return res.status(401).json(authError)
				}

				next()
			})

    } catch(err) {
        next(err);
    }
	}
}

module.exports = isAuthed;
