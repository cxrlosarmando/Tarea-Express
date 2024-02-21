const User = require('../models/user.models');

const UserAdd = async (req, res) => {
    const body = req.body; 
    await User.create(body);
    res.status(200).send("Usuarios agregados correctamente")
};

module.exports = UserAdd; 