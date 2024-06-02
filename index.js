const express = require("express")
const path = require("path")

const app = express()



app.set("PORT", process.env.PORT || 3500);
app.listen(app.get('PORT'),()=>console.log(`Server Ready al port ${app.get('PORT')}`))


//Connect to database
require('./drivers/connect-db')


// Settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Middlewares


app.use(express.json())

// Routes
app.use(require('./routes/routes-r'))


// Static

// Static
app.use(express.static("public"));//Estas líneas configuran los "middleware" de Express sirve archivos estáticos (como CSS, JavaScript e imágenes) desde el directorio public
// Servir archivos estáticos desde la carpeta 'public/css'
app.use('/css', express.static(path.join(__dirname, 'public/css')));
