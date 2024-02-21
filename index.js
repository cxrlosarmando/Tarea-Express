const app = require("./src/app/app");
const dbConnection = require("./src/Db/dbconect");
const port = 3000;

dbConnection()
    .then(() => {
        app.listen(port, () => {

            console.log(`La aplicación está corriendoen --->>>> http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error.message);
    });