import type { Metadata } from 'next'
import RegisterForm from '@/components/register-form'

export const metadata: Metadata = {
  title: 'Register',
  description: 'generate by create next app',
}

export default function Register() {
  return (
    <>
      <div className="flex justify-center items-center p-16">
        <RegisterForm />
      </div>
    </>
  )
}
