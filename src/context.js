import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const value = {
    isModalVisible,
    openModal: () => {
      setIsModalVisible(true)
    },
    closeModal: () => {
      setIsModalVisible(false)
    }
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Consumer: Context.Consumer
}
