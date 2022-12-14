const jwt = require('jsonwebtoken')
// middleware to validate token (rutas protegidas)

const verifyToken = (req, res, next) => {
    
    console.log(req.headers["auth-token"])

    const token = req.headers["auth-token"]
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    
    try {
        const verified =  jwt.verify(token, process.env.JWT_SECRET)
        console.log("verified pass!")
        req.user = verified
        next() 
    } catch (err) {
        console.log(err)
        //res.status(400).json({error: err})
    }
}

module.exports = verifyToken;
