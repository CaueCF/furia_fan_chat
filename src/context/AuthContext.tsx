import React, { useState, createContext, useContext } from 'react'

interface User {
  username: string
  avatar?: string
}
interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  
  const login = async (username: string, password: string) => {
    // In a real app, this would make an API call
    if (password.length < 6) {
      throw new Error('Invalid credentials')
    }
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser({
      username,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
    })
  }
  const logout = () => {
    setUser(null)
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
    if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
    }
  return context
}


export default AuthProvider;