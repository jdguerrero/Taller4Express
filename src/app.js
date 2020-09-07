const express = require("express");

const appServer = express();

//el modulo path permite concatenar directorios y hacerlo multiplataforma
const path = require("path");
const morgan = require("morgan");


// Settings

appServer.set("port" , 3000);

//establecemos motor de plantilla en EJS
appServer.set("view engine", "ejs");

//establece ruta para views y usa path para concatenar rutas
appServer.set("views" , path.join(__dirname, "views"));

//establece ruta para public y usa path para concatenar rutas
appServer.set("public" , path.join(__dirname, "public"));



/**
 * Motor de plantillas EJS view engine
 * 
 * EJS nos permite usar condiciones y bucles dentro del html
 * 
 */



// Middlewares

//funciones que se ejecutan antes de llegar a las rutas

/**
 * Morgan es un middlewares
 */

 //usamos metodo dev de morgan
appServer.use(morgan("dev"));

//sirve para entender los datos desde un formulario a un json
appServer.use(express.urlencoded({
    extended: false
}));




// Routes


appServer.use(require("./routes/index"));



// Static

//para indicar donde esta la carpeta public
appServer.use(express.static(path.join(__dirname, "public")));





//mensaje para ruta no existente error 404

// 404 
appServer.use( (req, res, next) =>{
    res.status(404).send("404 Not Found");
});


module.exports = appServer;


/**  Seccion taller 4

appServer.use(express.json());

appServer.listen(3000, ()=>{
    console.log("SERVER IS RUNNING ON PORT 3000");
});

appServer.get('/',
    (req, res) => {
        res.send("HELLO WORLD WITH EXPRESS!!!");
    }
);

appServer.get("/mybasicinfo",
    (req,res) => {
        res.send("THIS IS MY BASIC INFORMATION - MY NAME IS JUAN DAVID GUERRERO");
    }
);

appServer.get("/myexperience",
    (req, res) => {
        res.send("THIS IS MY EXPERIENCE")
    }
);

appServer.get("/getrequest",
    (req, res)=>{
        res.send("THIS IS A GET REQUEST");
    }
);

appServer.post("/postrequest",
    (req, res) => {
        res.send("THIS IS A POST REQUEST");
    }
);

appServer.delete("/deleterequest",
    (req, res) => {
        res.send("THIS IS A DELETE REQUEST");
    }
);


appServer.put("/putrequest",
    (req, res) => {
        res.send("THIS IS A PUT REQUEST");
    }
);


const myUser = require("./user");


appServer.get("/user", (req,res) => {
    res.json(myUser);
});

appServer.post("/adduser", (req, res) => {
    console.log(req.body);
    res.send("POST USER ADDED");
});

appServer.post("/updateuser/:idUser", (req, res) => {
    console.log(req.body);
    console.log(req.params.idUser);
    res.send("USER APDATED");
});

*/