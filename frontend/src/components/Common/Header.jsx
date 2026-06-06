import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import './Header.css'

function Header() {
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <h1>🌍 Kongo Blue Link</h1>
        </Link>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Accueil</Link>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              <Link to="/transports" className="nav-link">Transports</Link>
              <Link to="/matching" className="nav-link">Matching</Link>
              <Link to="/messages" className="nav-link">Messages</Link>
              <Link to="/profile" className="nav-link">Profil</Link>
              <button onClick={logout} className="nav-button logout-btn">Déconnexion</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Connexion</Link>
              <Link to="/register" className="nav-button register-btn">S'inscrire</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
