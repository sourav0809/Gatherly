import { useState } from 'react'
import { Button } from '@/components/common/UI/button.tsx'
import { Checkbox } from '@/components/common/UI/checkbox'
import { Input } from '@/components/common/UI/input'
import { Eye, EyeOff, Zap, Users, Globe, Lock, Snowflake } from 'lucide-react'
import { signUpSchema, loginSchema } from '@/schema/auth.schema'
import { validateForm } from '@/helpers/schema.helper'
import { toast } from 'sonner'

export const Auth = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isLogIn, setIsLogIn] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const signUp = (e: any) => {
    e.preventDefault()
    console.log(formData)
    if (!validateForm(signUpSchema, formData)) {
      return
    }
    toast.success('Account created successfully')
  }

  const login = (e: any) => {
    e.preventDefault()
    console.log(formData)
    if (!validateForm(loginSchema, formData)) {
      return
    }
    toast.success('Logged in successfully')
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Left Section - Login Form */}
      <div className="px-4 py-2 flex justify-start items-center gap-2 absolute top-4 left-4 ">
        <Snowflake className=" h-12 w-12 text-blue-500" />
        <p className="text-2xl font-bold">Gatherly</p>
      </div>
      <div className="flex-1 flex items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-lg space-y-6 lg:space-y-8">
          <div>
            <h2 className="text-2xl lg:text-4xl font-medium tracking-tight">
              {isLogIn ? 'Welcome back' : 'Create an account'}
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Enter to get unlimited access to data & information.
            </p>
          </div>

          <form className="space-y-4 lg:space-y-6">
            <div className="space-y-4">
              {!isLogIn && (
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="h-11"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
              )}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your mail address"
                  className="h-11"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    className="h-11"
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            {isLogIn && (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <a
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            )}

            <Button
              className="w-full h-11 bg-blue-600 hover:bg-blue-700"
              onClick={isLogIn ? login : signUp}
            >
              {isLogIn ? 'Log in' : 'Create Account'}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or, Login with
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full h-11 font-normal"
              onClick={() => {}}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </Button>

            <p className="text-center text-sm text-gray-600">
              {isLogIn ? "Don't have an account?" : 'Already have an account?'}{' '}
              <span
                onClick={() => setIsLogIn(!isLogIn)}
                className="text-blue-600 hover:text-blue-500 font-medium cursor-pointer"
              >
                {isLogIn ? 'Create an account' : 'Log in'}
              </span>
            </p>
          </form>
        </div>
      </div>

      {/* Right Section - Blue gradient background with text and icons (hidden on mobile) */}
      <div className="hidden lg:flex flex-1 flex-col justify-start pt-[10%] items-start bg-gradient-to-br from-blue-600 to-blue-800 text-white p-12">
        <h2 className="text-4xl font-medium mb-8">Welcome to Our Platform</h2>
        <p className="text-xl mb-12 w-full">
          Discover a world of possibilities. Connect, learn, and grow with our
          community of innovators and thought leaders.
        </p>
        <div className="space-y-8 ">
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Zap size={24} className="text-yellow-400" />
            </div>
            <div>
              <h3 className="text-xl">Lightning Fast</h3>
              <p className="text-white/80">
                Experience blazing speeds with our optimized platform
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Users size={24} className="text-green-400" />
            </div>
            <div>
              <h3 className="text-xl">Community Driven</h3>
              <p className="text-white/80">
                Join a thriving community of like-minded individuals
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Globe size={24} className="text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl">Global Reach</h3>
              <p className="text-white/80">
                Connect with people and resources from around the world
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Lock size={24} className="text-red-400" />
            </div>
            <div>
              <h3 className="text-xl">Secure & Private</h3>
              <p className="text-white/80">
                Your data is protected with state-of-the-art security measures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
