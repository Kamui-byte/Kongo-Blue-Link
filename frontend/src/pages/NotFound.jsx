import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page non trouvée</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  )
}

export default NotFound
