import React, { createContext, useContext, useState } from 'react'

const PageContext = createContext()

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('inicio')

  const navigateTo = (pageName) => {
    setCurrentPage(pageName)
  }

  return (
    <PageContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </PageContext.Provider>
  )
}

export const usePage = () => {
  const context = useContext(PageContext)
  if (!context) {
    throw new Error('usePage debe usarse dentro de un PageProvider')
  }
  return context
}