const db = require('../models/');
const User = db.users;

exports.findAll = (req, res) => {
    const firstname = req.query.firstname;
    const condition = firstname ? {firstname: firstname} : null;
    User.findAll({where: condition}).then(data => {
        res.send(data);
    });
}

exports.findOne = (req, res) => {
    User.findByPk(req.params.id).then(data => {
        res.send(data);
    });
}

exports.create = (req, res) => {
    User.create(req.body).then((user)=>{
        User.findByPk(user.id).then(data => {
            res.status(200).send({
                message: 'Successfully created user',
                user: data
            });
        });
    });
}

exports.update = (req, res) => {
    const condition = { id: req.params.id };
    User.update(req.body, {where: condition}).then(() => {
        User.findByPk(req.params.id).then(data => {
            res.status(200).send({
                message: 'Successfully updated user',
                user: data
            });
        });
    });
}

exports.delete = (req, res) => {
    const condition = { id: req.params.id };
    User.destroy({where: condition}).then(num => {
        const message = num === 1 ? 'Successfully deleted user' : 'Cannot delete user';
        res.status(200).send({message});
    });
}