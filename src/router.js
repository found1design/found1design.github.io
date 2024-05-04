import { Router } from "@vaadin/router";
import './domus';
import './branding';
import './festival';
import './advertising';
import './tipografia';



const outlet = document.querySelector("#app");

export const router = new Router(outlet);


router.setRoutes([ 
    { 
        path: "/", 
        component: "domus-pagina" 
    },
    { 
        path: "/branding", 
        component: "branding-pagina" 
    },
    { 
        path: "/advertising", 
        component: "advertising-pagina" 
    },
    { 
        path: "/tipografia", 
        component: "tipografia-pagina" 
    },
    { 
        path: "/festival", 
        component: "festival-pagina" 
    }
]);