import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>Nosotros</h4>
            <ul>
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="#">Nuestros servicios</a></li>
              <li><a href="#">Politicas de privacidad</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Tienda Online</h4>
            <ul>
              <li><a href="#">Productos 1</a></li>
              <li><a href="#">Productos 2</a></li>
              <li><a href="#">Productos 3</a></li>
              <li><a href="#">Productos 4</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Seguinos</h4>
            <div class="social-links">
              <a href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a>
              <a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faSquareTwitter} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer