import React, { useContext, createContext, useState } from 'react'

const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false)
  const [edit, setEdit] = useState(null)
  const closeModal = () => {
    setOpenModal(false)
  }
  const clearEdit = () => {
    setEdit(null)
  }

  return (
    <ModalContext.Provider
      value={{ openModal, setOpenModal, closeModal, edit, setEdit, clearEdit }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => {
  return useContext(ModalContext)
}
