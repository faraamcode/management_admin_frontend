import React, { useContext, createContext, useState } from 'react'

const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false)

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => {
  return useContext(ModalContext)
}
