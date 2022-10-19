import React from "react";
import Logo from "./CartWidget";


function NavBar () {
    return (
        <>
            <header>
                <div className="interior">
                    <a href="#" className="logo"><Logo /></a>
                    <h5>BarraMovil</h5>
                    <nav className="navegacion">
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Tienda</a></li>
                            <li><a href="#">Nosotros</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default NavBar