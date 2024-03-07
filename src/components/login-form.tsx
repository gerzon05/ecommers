'use client'
import { Button } from '@material-tailwind/react'
import { Email, Password } from './icons'
import { Input } from './ui'

export default function LoginForm() {
  return (
    <>
      <form className="flex flex-col items-center gap-6 w-10/12 md:w-96 lg:w-[500px]">
        <section className="text-center">
          <h2>Logo</h2>
          <h2>Formulario de Inicio de sesión</h2>
        </section>
        <section className="w-full">
          <label>Email*</label>
          <article className="relative">
            <Input type="email" newstyle="w-full pl-8" placeholder="Email" />
            <Email />
          </article>
        </section>
        <section className="w-full">
          <label>Contraseña*</label>
          <article className="relative">
            <Input
              type="password"
              newstyle="w-full pl-8"
              placeholder="Password"
            />
            <Password />
          </article>
        </section>
        <section className="w-full text-center">
          <Button
            className="w-full bg-slate-three text-sm"
            placeholder="Registrarse"
          >
            Inicias sesión
          </Button>
        </section>
      </form>
    </>
  )
}
