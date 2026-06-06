# Kongo Blue Link - Frontend

Frontend React pour la plateforme Kongo Blue Link.

## 🚀 Features

- React 18 avec Hooks
- Vite pour un build rapide
- Zustand pour la gestion d'état
- Axios pour les appels API
- React Router pour la navigation
- Toastify pour les notifications

## 📦 Installation

```bash
cd frontend
npm install
cp .env.example .env
```

## 🏃 Démarrage

```bash
npm run dev
```

L'app sera disponible à `http://localhost:5173`

## 🏗️ Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Common/
│   │   ├── Auth/
│   │   ├── Transport/
│   │   ├── Matching/
│   │   └── Messages/
│   ├── pages/
│   ├── store/
│   ├── hooks/
│   ├── services/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔑 Variables d'environnement

Voir `.env.example`

## 📚 Documentation

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
