const appServer = require("./app");

//la funcion manejara codigo asincrono
async function main (){

    //linea asincrona
    await appServer.listen(appServer.get("port"));

    //console log permite concatenar con , dado que es una funcion
    console.log("SERVER RUNING ON PORT", appServer.get("port"));
}

main();



