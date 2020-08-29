const Session = require('../models/session')
const sessionController = {}
sessionController.create=(req,res)=>{
    
    const body = req.body
   const session = new Task(body)
    session.user = req.user._id
    session.save()
    .then((session)=>{
        res.json(session)
    })    
    .catch((err)=>{
        res.json(err)
    })
}