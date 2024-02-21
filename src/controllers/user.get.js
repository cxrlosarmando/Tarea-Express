const User = require('../models/user.models');



const UserGet = async (req, res) => {
    const users = await User.find({});
    res.send(users);
}

module.exports = UserGet;