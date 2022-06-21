const convertPdf = document.querySelector("#convertPdf");
convertPdf.addEventListener("click", function () {
  print();
});
var formacionAcademica = [
  {
    curso: "Universidad HTML 2021",
    institucion: "Udemy",
    finalizado: "10-2021",
  },
  {
    curso: "Diseño Web con HTML5 + CSS",
    institucion: "Fundación Telefónica",
    finalizado: "11-2021",
  },
  {
    curso: "Programación con JavaScript",
    institucion: "Fundación Telefónica",
    finalizado: "11-2021",
  },
  {
    curso: "Universidad CSS 2021",
    institucion: "Udemy",
    finalizado: "11-2021",
  },
  {
    curso: "Argentina Programa: #SéProgramar",
    institucion: "Mumuki - Argentina Programa",
    finalizado: "12-2021",
  },
  {
    curso: "Business Agility - ONE",
    institucion: "Alura latam - Oracle ONE",
    finalizado: "12-2021",
  },
  {
    curso: "Desarrollo Personal - ONE",
    institucion: "Alura latam - Oracle ONE",
    finalizado: "12-2021",
  },
  {
    curso: "Emprendimiento - ONE",
    institucion: "Alura latam - Oracle ONE",
    finalizado: "12-2021",
  },
  {
    curso: "Programación con Java Standard",
    institucion: "Fundación Telefónica",
    finalizado: "12-2021",
  },
  {
    curso: "Universidad desarrollo web 2021 ",
    institucion: "Udemy",
    finalizado: "12-2021",
  },
  {
    curso: "Principiante en Programación - ONE ",
    institucion: "Alura latam - Oracle ONE",
    finalizado: "1-2022",
  },
  {
    curso: " Principiante en Programación",
    institucion: "Alura latam - Oracle ONE",
    finalizado: "2-2022",
  },
  {
    curso: "Front-end - ONE",
    institucion: "Alura latam - Oracle ONE",
    finalizado: "4-2022",
  },
  { curso: "Universidad Angular", institucion: "Udemy", finalizado: "6-2022" },
  {
    curso: "JAVA orientado a Objetos - ONE",
    institucion: "Alura latam - Oracle ONE",
    finalizado: "6-2022",
  },

];

function crearTarjeta(objeto){
    return `
        <div class="tarjeta">
          <p class="tarjeta--titulo">${objeto.curso}</p>
          <img class="icono" src="img/libro-de-lectura.png" alt="Alura latam" />
          <p>${objeto.institucion}</p>
          <p>${objeto.finalizado}</p>
        </div>
        `
}
let tajetero = document.getElementById("tarjetero");
let cursosHTML="";
for (let index = 0; index < formacionAcademica.length; index++) {
    

    cursosHTML+= crearTarjeta(formacionAcademica[index]);
    
}
tajetero.innerHTML=cursosHTML;