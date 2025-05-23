import './style.css'
import { iniciarQuiz, cargarPagina } from './quiz'
import '@flaticon/flaticon-uicons/css/all/all.css';

cargarPagina()
document.querySelector('.seccion-botones').addEventListener('click',iniciarQuiz)