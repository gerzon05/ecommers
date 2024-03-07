import type { Metadata } from 'next'
import LoginForm from '@/components/login-form'

export const metadata: Metadata = {
  title: 'Login',
  description: 'generate by create next app',
}

export default function Login() {
  return (
    <>
      <div className="flex justify-center items-center p-16">
        <LoginForm />
      </div>
    </>
  )
}
