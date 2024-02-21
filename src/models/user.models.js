const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    nombre: String,
    edad: Number,
    apellido: String,
    correo: String,
    password: String,
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
