
exports.handler = (req, res) => {  
	res.status(200).send(JSON.stringify({
		address: req.headers['x-forwarded-for']
	}));
};

