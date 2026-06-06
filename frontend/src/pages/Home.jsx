import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>🌍 Bienvenue sur Kongo Blue Link</h1>
          <p>La plateforme de logistique intelligente pour optimiser votre chaîne d'approvisionnement</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">S'inscrire maintenant</Link>
            <Link to="/login" className="btn btn-secondary">Se connecter</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Nos Services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🔗 Matching Intelligent</h3>
            <p>Connexion efficace entre chargeurs et transporteurs avec algorithme intelligent</p>
          </div>
          <div className="feature-card">
            <h3>📍 Suivi en Temps Réel</h3>
            <p>Optimisation des tournées et suivi en direct de vos envois</p>
          </div>
          <div className="feature-card">
            <h3>🏪 Micro-hubs</h3>
            <p>Réseau de micro-hubs pour une livraison dernier kilomètre optimisée</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
