class Character {
    constructor( id, nombre, img, descr, fecha, enlace ) {
        this.id = id;
        this.nombre = nombre;
        this.img = img;
        this.descr = descr;
        this.fecha = fecha;
        this.enlace = enlace;
    }
}

export const characters = [
    new Character(
        0,
        "3 Days of Type",
        "Tab.gif",
        "Tres letras diseñadas en base a una representación visual del sonido diferente.",
        "Enero 2024",
        "tipografia"
    ),

    new Character(
        1,
        "Terra",
        "Terra.png",
        "Campaña para alentar a chicas de bachillerato a que estudien la carrera de Geomática y Topografía en la UPV",
        "Junio 2023",
        "advertising"
    ),
    
    new Character(
        2,
        "LPLS",
        "Lpls.png",
        `Cartel y folleto para el festival "La Palabra y los Sentidos".`,
        "Febrero 2024",
        "festival"
    ),
    
    new Character(
        3,
        "Ocoa",
        "Chocolate.gif",
        "Rebranding de marca para una empresa de chocolate Valenciana que se rejuvenece de su tradición.",
        "Marzo 2023",
        "branding"
    ),



];



