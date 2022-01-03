import express from "express";
const router = express.Router();
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import Register from "../models/schema_register.js";

router.post(
	"/register",
	body("user").isLength({ min: 6 }),
	body("email").isEmail(),
	body("passwd").isLength({ min: 6 }),
	(req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { user, name, last_name, email, passwd } = req.body;

		bcrypt.hash(passwd, 10, (err, password) => {
			if (err) {
				res.status(400).send();
			} else {
				const register = new Register({
					user,
					name,
					last_name,
					email,
					passwd: password,
				});

				register.save(err => {
					if (err) {
						console.log(err);
						res.status(400).json({
							error: err,
							data: "Algo fue mal",
						});
					} else {
						res.status(200).send();
					}
				});
			}
		});
	}
);

export default router;
