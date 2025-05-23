import HTML from './data/HTML.json'
import CSS from './data/CSS.json'
import JS from './data/JavaScript.json'
import BT from './data/Bootstrap.json'

let quiz = []
let pregunta_actual = 0
let puntuacion = 0
let respuesta = ""
let quiz_actual = "By:MadeInRodri"
let logo_url = "https://res.cloudinary.com/diogirqun/image/upload/v1747796101/mortarboard_gm7xik.png"

const logo = document.querySelector('.encabezado')
const encabezado = document.querySelector('.seccion-encabezado')
const botones = document.querySelector('.seccion-botones')



export function cargarPagina(){


    logo.innerHTML = ''
    encabezado.innerHTML = ''
    botones.innerHTML = ''

    logo.innerHTML = `
    <picture>
        <img src="https://res.cloudinary.com/diogirqun/image/upload/v1747796101/mortarboard_gm7xik.png">
    </picture>
    <h2>By: MadeInRodri</h2>
    `
    encabezado.innerHTML = `
    <h1>
        Bienvenido al <strong>Quiz de Frontend!</strong>
    </h1>
    <p>Elige una opción para comenzar</p>
    `

    botones.innerHTML = `
        <article class="articulo-botones">
        <button class="opcion">
          <picture>
              <img src ="https://res.cloudinary.com/diogirqun/image/upload/v1747781934/html-5_lxg9ix.png">
          </picture>
          <h2>HTML</h2>
        </button>
        <button class="opcion">
          <picture>
              <img src ="https://res.cloudinary.com/diogirqun/image/upload/v1747781934/css-3_nn1vct.png">
          </picture>
          <h2>CSS</h2>
        </button>
        <button class="opcion">
          <picture>
            <img src ="https://res.cloudinary.com/diogirqun/image/upload/v1747781934/js_kb1ife.png">
          </picture>
          <h2>Javascript</h2>
        </button>
        <button class="opcion">
          <picture>
            <img src ="https://res.cloudinary.com/diogirqun/image/upload/v1747781934/bootstrap_chiolh.png">
          </picture>
          <h2>Bootstrap</h2>
        </button>
      </article>
    `
}
export function iniciarQuiz(e){
    const button = e.target.closest('button')
    if(!button) return

    if(button.classList.contains('opcion')){
        seleccionarQuiz(e)
        mostrarPregunta()
    }
    else{
            seleccionarPregunta(button)
            console.log(respuesta)
            if(respuesta!= "" && button.classList.contains('btn-enviar-respuesta')){
                pasarPregunta(button)
                mostrarPregunta()
            }
    }
    if(button.classList.contains('btn-intentar')){
        pregunta_actual = 0
        puntuacion = 0
        cargarPagina()
    }
    
}


function seleccionarQuiz(e){
    const opcion = e.target.closest('button').innerText
    switch(opcion){
        case "HTML":
            quiz = HTML
            quiz_actual = "HTML"
            logo_url = "https://res.cloudinary.com/diogirqun/image/upload/v1747781934/html-5_lxg9ix.png"
            break;
        case "CSS":
            quiz = CSS
            quiz_actual = "CSS"
            logo_url = "https://res.cloudinary.com/diogirqun/image/upload/v1747781934/css-3_nn1vct.png"
            break;
        case "Javascript":
            quiz = JS
            quiz_actual = "JavaScript"
            logo_url = "https://res.cloudinary.com/diogirqun/image/upload/v1747781934/js_kb1ife.png"
            break;
        case "Bootstrap":
            quiz = BT
            quiz_actual = "Bootstrap"
            logo_url = "https://res.cloudinary.com/diogirqun/image/upload/v1747781934/bootstrap_chiolh.png"
            break;
    }
}

function mostrarPregunta(){
    if(pregunta_actual < quiz.length){
    logo.innerHTML = ''
    encabezado.innerHTML = ''
    botones.innerHTML = ''
    let miPregunta = quiz[pregunta_actual]

    logo.innerHTML =`
    <picture>
        <img src="${logo_url}">
    </picture>
    <h2>${quiz_actual}</h2>
    `

    encabezado.innerHTML = `
        <p>Pregunta ${pregunta_actual+1} de 10</p>
        <h3>
        ${miPregunta.pregunta}
        </h3>
        `

    botones.innerHTML = `
        <article class="articulo-botones">
        <button class="respuesta">
          <picture>
              <i class="fi fi-rr-square-a"></i>
          </picture>
          <h2>${miPregunta.opciones[0].toString()}</h2>
        </button>
        <button class="respuesta">
          <picture>
              <i class="fi fi-rr-square-b"></i>
          </picture>
          <h2>${miPregunta.opciones[1].toString()}</h2>
        </button>
        <button class="respuesta">
          <picture>
            <i class="fi fi-rr-square-c"></i>
          </picture>
          <h2>${miPregunta.opciones[2].toString()}</h2>
        </button>
        <button class="respuesta">
          <picture>
            <i class="fi fi-rr-square-d"></i>
          </picture>
          <h2>${miPregunta.opciones[3].toString()}</h2>
        </button>
        <button class="btn-enviar-respuesta">Enviar respuesta</button>
      </article>
        `
    }
    else{
        finalizarQuiz()
    }
}

function pasarPregunta(button){
    console.log("Pasé la pregunta")
    let miPregunta = quiz[pregunta_actual]
    if(miPregunta.respuesta == respuesta){
        puntuacion++
    }
    pregunta_actual++
    respuesta = ""

    console.log(pregunta_actual)
    console.log(respuesta)
    /*


    if(button.classList.contains('btn-enviar-respuesta')){
        pregunta_actual++
        respuesta = ""
    }
        */

}

function seleccionarPregunta(button){
    let botones = document.querySelectorAll('button')

    botones.forEach(boton =>(boton.classList.remove('seleccionado')))

    button.classList.add('seleccionado')
    
    if(button.innerText!= 'Enviar respuesta'){
            respuesta = button.innerText
    }
}

function finalizarQuiz(){
    encabezado.innerHTML = ''
    botones.innerHTML = ''
    encabezado.innerHTML = `
        <h1>
        Has terminado el <strong>Quiz!</strong>
        </h1>
        <p>Tu nota es de:</p>
        `
    botones.innerHTML = `
    <article class="articulo-botones">
          <div>
            <h2 class="resultados">${puntuacion}</h2>
            <p class="resultados">...De 10</p>
          </div>
          <button class="btn-intentar">Volver a intentarlo</button>
        </article>
    `
}

function reiniciarQuiz(){
    quiz = []
    pregunta_actual = 0
    puntuacion = 0
    quiz_actual = "By:MadeInRodri"
    logo_url = "https://res.cloudinary.com/diogirqun/image/upload/v1747796101/mortarboard_gm7xik.png"
}