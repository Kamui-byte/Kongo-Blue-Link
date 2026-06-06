import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { toast } from 'react-toastify'
import './Register.css'

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    phone: '',
    user_type: 'LOADER',
  })
  const [isLoading, setIsLoading] = useState(false)
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const success = await register(formData)
      if (success) {
        toast.success('Inscription réussie!')
        navigate('/login')
      }
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Erreur d\'inscription')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first_name">Prénom</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Nom</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_type">Type de compte</label>
            <select
              id="user_type"
              name="user_type"
              value={formData.user_type}
              onChange={handleChange}
              disabled={isLoading}
            >
              <option value="LOADER">Chargeur</option>
              <option value="TRANSPORTER">Transporteur</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
          <button type="submit" className="btn-submit" disabled={isLoading}>
            {isLoading ? 'Inscription...' : 'S\'inscrire'}
          </button>
        </form>
        <p className="register-link">Déjà inscrit? <a href="/login">Se connecter</a></p>
      </div>
    </div>
  )
}

export default Register
