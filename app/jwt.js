const jwt = require('jsonwebtoken');

module.exports = {
    encode: (use_data, secret_key) => {
        try {
            const token = jwt.sign({
                data: use_data, //'data you want use user_unique_details to make token different'
            }, secret_key, { expiresIn: '24h' });
            return token;
        } catch (err) {
            throw new Error('Token not generate');
        }
    },
    decode: (token, secret_key) => {
        return new Promise((resolve, reject) => {
            jwt.verify(token, secret_key, (err, data) => {
                if (err) {
                    if (err.name == 'TokenExpiredError')
                        reject(E.createError(errorList.Un_Authorized), 'token expired');
                    else
                        reject(E.createError(errorList.Un_Authorized), 'invalid token');
                }
                else resolve(data);
            })
        });
    }
}