const User =  require('../models/user.models')


const UserDelete = async (req, res) => {
    const id = req.params.id;
    await User.deleteOne({_id: id});
    res.status(200).send("Usuario eliminado correctamente")
}

module.exports = UserDelete;