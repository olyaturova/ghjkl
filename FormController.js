const Form = require('./FormModel');

module.exports.getForm = (req,res) => {
    res.sendFile(__dirname + "/frontend/index.html")
}

module.exports.postForm = (req,res) => {
    let newForm = new Form({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    newForm.save()
    res.sendFile(__dirname + "/frontend/answer.html")
}