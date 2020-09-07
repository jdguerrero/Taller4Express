
const { Router } = require("express");

const router = Router();

const fs = require("fs");

const jsonUsers = fs.readFileSync("src/users.json" , "utf-8");

let users = JSON.parse(jsonUsers);

const uuid = require("uuid");


//ruta inicial
router.get("/", (req,res) => {
    res.render("index.ejs",{
        users
    })
});


//interfaz formulario

router.get("/newUser", (req,res) =>{
    res.render("newUser")
});


router.post("/newUser", (req,res) =>{
    
    const {nombre,apellido,edad,carrera} = req.body;

    if(!nombre || !apellido || !edad || !carrera){
        res.status(400).send("Campos vacios")
    }
    let newUser = {
        //uuid 
        idUser: uuid.v4(),
        nombre,
        apellido,
        edad,
        carrera
    }
    
    users.push(newUser);


    const jsonUsers = JSON.stringify(users);

    //escritura archivo json con modulo fileSystem
    fs.writeFileSync("src/users.json" , jsonUsers, "utf-8");


    res.redirect("/");
});

router.get("/delete/:id", (req,res) =>{
    //todos los datos son agregados menos el que tenga el id

    let pos = users.indexOf(req.params.idUser);

    users.splice(pos, 1)

    const jsonUsers = JSON.stringify(users);

    console.log(jsonUsers);

    //escritura archivo json con modulo fileSystem
    fs.writeFileSync("src/users.json" , jsonUsers, "utf-8");

    res.redirect("/");
});




module.exports = router;