import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { ArrowLeft } from 'lucide-react'
interface LoginPageProps {
  onBack: () => void
}
const LoginPage: React.FC<LoginPageProps> = ({ onBack }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    try {
      await login(username, password)
      // Login successful
      onBack()
    } catch (err) {
      setError('Invalid credentials. Password must be at least 6 characters.')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <button
        onClick={onBack}
        className="text-white p-4 flex items-center hover:text-red-500 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Fan Hub
      </button>
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <img
              src="/Furia_Esports_logo.png"
              alt="FURIA Logo"
              className="h-16 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-white">
              Sign in to FURIA Fan Hub
            </h2>
            <p className="mt-2 text-gray-400">
              Join the conversation with other FURIA fans
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-300"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`mt-1 block w-full rounded-md bg-gray-900 
                    border border-gray-700 text-white px-4 py-2 
                    focus:outline-none focus:ring-2 focus:ring-red-500`}
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`mt-1 block w-full rounded-md bg-gray-900 
                    border border-gray-700 
                    text-white px-4 py-2 
                    focus:outline-none focus:ring-2 focus:ring-red-500`}
                  placeholder="Enter your password"
                />
              </div>
            </div>
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-3 px-4 border 
                border-transparent rounded-md shadow-sm text-sm font-medium 
                text-white bg-red-600 hover:bg-red-700 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 
                ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
                `}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default LoginPage
