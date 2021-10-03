import React, { useContext, createContext, useState } from 'react'
import { COOKIE_KEY } from '../common/constant'

const AuthContext = createContext({
  token: null,
  setToken: _ => {},
  clearToken: () => {}
})

export const AuthServiceProvider = ({ children }) => {
  const [token, updateToken] = useState(() => {
    const v = document.cookie.match('(^|;) ?' + COOKIE_KEY + '=([^;]*)(;|$)')
    return v ? v[2] : null
  })

  const setToken = ({ token, expires }) => {
    const expirationTime = new Date()
    expirationTime.setTime(expirationTime.getTime() + 1000 * expires)

    document.cookie = `${COOKIE_KEY}=${token};path=/;expires=${expirationTime.toUTCString()}`
    updateToken(token)
  }

  const clearToken = () => {
    setToken({ token: null, expires: -1 })
  }
  return (
    <AuthContext.Provider value={{ token, setToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
