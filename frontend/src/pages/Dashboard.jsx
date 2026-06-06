import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Bienvenue sur votre dashboard</p>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Mes Transports</h3>
          <p>Gérez vos demandes de transport</p>
        </div>
        <div className="dashboard-card">
          <h3>Matches Actifs</h3>
          <p>Consultez vos appariements en cours</p>
        </div>
        <div className="dashboard-card">
          <h3>Statistiques</h3>
          <p>Analyser vos performances</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
