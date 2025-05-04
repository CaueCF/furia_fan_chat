import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router'
interface LoginPageProps {
  onBack: () => void
}
const LoginPage: React.FC<LoginPageProps> = ({ onBack }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const backToLive = () =>{
    navigate("/live");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    try {
      await login(username, password)
      // Login successful
      backToLive();
    } catch (err) {
      setError('Invalid credentials. Password must be at least 6 characters.')
    } finally {
      setIsLoading(false)
    }
  }

  const stroke = "#919EAB";
  const background = "#131313";

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <button
        onClick={backToLive}
        className="text-white p-4 flex items-center hover:text-gray-400 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Voltar ao Fã Hub
      </button>
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <img
              src="/logos/Furia_Esports_logo.png"
              alt="FURIA Logo"
              className="h-16 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-white">
              Entre no FURIA Fã Hub
            </h2>
            <p className="mt-2 text-gray-400">
              Converse com outros fãs da FURIA
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-300"
                >
                  Usuário
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`mt-1 block w-full rounded-md bg-[${background}] 
                    border border-[${stroke}] text-white px-4 py-2 
                    focus:outline-none focus:ring-1 focus:ring-[${stroke}]`}
                  placeholder="Insira seu nome de usuário"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`mt-1 block w-full rounded-md bg-[${background}] 
                    border border-[${stroke}] text-white px-4 py-2 
                    focus:outline-none focus:ring-1 focus:ring-[${stroke}]`}
                  placeholder="Insira sua senha"
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
                text-black bg-gray-300 hover:bg-gray-400 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${stroke}] 
                ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
                `}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default LoginPage
