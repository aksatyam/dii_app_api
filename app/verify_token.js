const jwt = require('./jwt');

module.exports = async (req, res, next) => {
    try {
        await jwt.decode(req.headers.token, process.env.KEY);
        next();
    } catch (err) {
        console.log('Error is:: ', err);
        res.send(401).send('not verified');
    }
}