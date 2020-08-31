const User = require('../models/user')
const Session = require('../models/session')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usersController = {}

usersController.register = (req, res) => {
    const body = req.body 
    const user = new User(body)
    bcryptjs.genSalt()
        .then((salt) => {
            bcryptjs.hash(user.password, salt)
                .then((encrypted) => {
                    user.password = encrypted
                    user.save()
                        .then((user) => {
                            res.json({user,
                                message:'Registered Successfully'
                            })
                        })
                        .catch((err) => {
                            res.json(err)
                        })
                })
        })
}

usersController.login = (req, res) => {
    const body = req.body 
    User.findOne({ phone: body.phone }) 
        .then((user) => {
            if(!user) {
                res.json({ 
                    errors: 'invalid phone number or password'
                })
            }

            bcryptjs.compare(body.password, user.password)
                .then((match) => {
                    if(match) {
                        const tokenData = {
                            _id: user._id,
                            phone:user.phone,
                            username: user.username  
                        }
                        const token = jwt.sign(tokenData, 'dct123', { expiresIn: '1d'})
                        res.json({
                            token: `Bearer ${token}`
                        })
                    } else {
                        res.json({ errors: 'invalid phone number or password'})
                    }
                })
        })
}

usersController.account = (req, res) => {
    res.json(req.user)
}

usersController.destroy = (req,res)=>{
    const id = req.params.id
    User.findOneAndDelete({ _id:id})
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        res.json(err)
    })
}
usersController.logout = function (req, res) {
    const { user, token } = req
    User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
        .then(function () {
            res.send({ notice: 'successfully logged out' })
        })
        .catch(function (err) {
            res.send(err)
        })
}
module.exports = usersController