const User = require('../models/user.models');

const ActualizarUsuario = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    await User.findByIdAndUpdate(id, body);
    res.status(200).send("Usuario actualizado correctamente")
}

module.exports = ActualizarUsuario;