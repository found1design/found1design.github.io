import html from './domus.html?raw';
import './estilus.css'
import { characters } from './data';
import { renderLogo } from '../render-logo/render-logo';
import { renderLogoMenu } from '../render-logo-menu/render-logo-menu';



export class DomusPagina extends HTMLElement {

    connectedCallback() { 

        this.innerHTML = html;

        window.onpopstate = function(event) {
            location.reload(true);
        };
        
        const logoPrimus = document.querySelector('.svg-found');
        renderLogo(logoPrimus, "magnitudine-primus")

        const logoPrimusMenu = document.querySelector('.svg-found-menu');
        renderLogo(logoPrimusMenu, "magnitudine-primu")

        document.querySelector('.hamburger').addEventListener('click', () => {
            document.getElementById('contenedor').style.visibility = 'visible';


        }); 

        document.querySelector('.exit').addEventListener('click', () => {
            document.getElementById('contenedor').style.visibility = 'hidden';


        }); 

        document.addEventListener("DOMContentLoaded", function () {
            const cursor = document.createElement("div");
            cursor.classList.add("custom-cursor");
            document.body.appendChild(cursor);
          
            document.addEventListener("mousemove", function (e) {
              cursor.style.left = e.clientX + "px";
              cursor.style.top = e.clientY + "px";
            });
          
            const anchors = document.querySelectorAll("a");
          
            anchors.forEach((anchor) => {
              anchor.addEventListener("mouseover", function () {
                cursor.style.width = "200px"; /* Expanded width */
                cursor.style.height = "200px"; /* Expanded height */
              });
          
              anchor.addEventListener("mouseout", function () {
                cursor.style.width = "30px"; /* Initial width */
                cursor.style.height = "30px"; /* Initial height */
              });
            });
        });


        const ulElementum = document.querySelector ('.album');

        
        let listHTML = '';

        let getCharacters = () => {
            const magnitudine = characters.length;
            const vacuaArr = Array.from(Array(magnitudine));
            const ordinemArr = vacuaArr.map(( _ , index) => index );
            const inordinateArr =  ordinemArr.sort( );
            let nonumArr = [];
            for(let i = 0; i< magnitudine; i++) {
                nonumArr[i] = characters[inordinateArr[i]];
            }
            return nonumArr.slice(0, 4);
        }

        const gridImagenes = getCharacters ();

        gridImagenes.forEach( character => {
            listHTML += `
            <div class="image">
                <a href="./${ character.enlace }"><img class="image__img" src="./public/proyectos/${ character.img }">
		        <div class="image__overlay image__overlay--primary">
			        <div class="image__title">${ character.nombre }</div>
			        <p class="image__description">
				        ${ character.descr }
                    <br>
                    ${ character.fecha }
			        </p>
		        </div>
                </a>
	        </div>
        `;
        })

        ulElementum.innerHTML = listHTML;





    }


}


customElements.define("domus-pagina", DomusPagina);
