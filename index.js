const app = require("./src/app/app")
const port = 3000

app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

app.listen(port, () => {
    console.log(`La aplicación está corriendoen --->>>> http://localhost:${port}`)
})