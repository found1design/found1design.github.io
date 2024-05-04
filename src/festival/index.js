import html from './festival.html?raw';
import './estilus.css';
import { renderLogo } from '../render-logo/render-logo';
import { renderLogoMenu } from '../render-logo-menu/render-logo-menu';



export class FestivalPagina extends HTMLElement {

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
                cursor.style.width = "150px"; /* Expanded width */
                cursor.style.height = "150px"; /* Expanded height */
              });
          
              anchor.addEventListener("mouseout", function () {
                cursor.style.width = "30px"; /* Initial width */
                cursor.style.height = "30px"; /* Initial height */
              });
            });
          });
        
    
    }
}
customElements.define("festival-pagina", FestivalPagina);
