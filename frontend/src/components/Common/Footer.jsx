import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Kongo Blue Link</h3>
          <p>Plateforme de logistique intelligente pour les ports congolais</p>
        </div>
        <div className="footer-section">
          <h4>Liens Rapides</h4>
          <ul>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Contact Support</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Kongo Blue Link. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer
