import HTML from './data/HTML.json'
import CSS from './data/CSS.json'
import JS from './data/JavaScript.json'
import BT from './data/Bootstrap.json'

let quiz = []
let puntuacion = 0
let pregunta_actual = 0
let respuesta_actual = ""
const encabezado = document.querySelector('.seccion-encabezado')
const botones = document.querySelector('.seccion-botones')

export function iniciarQuiz(e){
    const button = e.target.closest('button')
    if(!button) return

    if(!e.target.classList.contains('btn-enviar-respuesta')){
        const opcion = e.target.closest('button').innerText

    switch(opcion){
        case "HTML":
            quiz = HTML
            break;
        case "CSS":
            quiz = CSS
            break;
        case "Javascript":
            quiz = JS
            break;
        case "Bootstrap":
            quiz = BT
            break;
    }
        if(pregunta_actual == 0){
            pasarPregunta()
        }
    }
    else{
        pasarPregunta()
    }
}

function mostrarPregunta(){
    encabezado.innerHTML = ''
    botones.innerHTML = ''
    let miPregunta = quiz[pregunta_actual]

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
        <button class="btn-enviar-respuesta disable">Enviar respuesta</button>
      </article>
        `
    botones.querySelector('.btn-enviar-respuesta').disable = true
    botones.querySelector('.btn-enviar-respuesta').type = "hidden"
}


export function pasarPregunta(){
    mostrarPregunta()
    pregunta_actual++
}