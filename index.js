
exports.handler = (req, res) => {  
	const result = {
		address: req.headers['x-forwarded-for']      
    }
    res.status(200).send(JSON.stringify(result));
};

