import React from 'react'
import fondo from './utils/imagenes/background.avif'
import { PageProvider, usePage } from './context/PageContext'
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'
import PetalsAnimation from './components/PetalsAnimation'

const AppContent = () => {
  const { currentPage } = usePage()

  return (
    <main className="w-full relative z-10 py-4">
      {currentPage === 'inicio' && <HomePage />}
      {currentPage === 'detalles' && <DetailsPage />}
    </main>
  )
}

function App() {
  return (
    <PageProvider>
      <div className="relative min-h-screen w-full block overflow-x-hidden bg-rose-950">
        {/* Imagen de fondo fija */}
        <img
          src={fondo}
          alt="Fondo"
          className="fixed inset-0 w-full h-full object-cover -z-10"
        />

        {/* Animación de Pétalos Flotantes en Canvas */}
        <PetalsAnimation />

        {/* Renderizado de vistas */}
        <AppContent />
      </div>
    </PageProvider>
  )
}

export default App