'use client'
import { Email, Password, Phone } from './icons'
import { Input } from './ui'
import { Button } from '@material-tailwind/react'

export default function RegisterForm() {
  return (
    <>
      <form className='flex flex-col items-center gap-6 z-50 w-10/12 md:w-96 lg:w-[500px]'>
        <section className='text-center'>
          <h2>Logo</h2>
          <h2>Formulario de registro</h2>
        </section>
        <section className='w-full'>
          <label>Nombre Completo*</label>
          <article className='flex flex-wrap justify-between gap-2'>
            <Input
              type='text'
              newStyle={'w-full md:w-[48%]'}
              placeholder='Nombre'
            />
            <Input
              type='text'
              newStyle={'w-full md:w-[48%]'}
              placeholder='Apellido'
            />
          </article>
        </section>
        <section className='w-full'>
          <label>Email*</label>
          <article className='relative'>
            <Input type='email' newStyle={'w-full pl-8'} placeholder='Email' />
            <Email />
          </article>
        </section>
        <section className='w-full'>
          <label>Contraseña*</label>
          <article className='relative'>
            <Input
              type='password'
              newStyle={'w-full pl-8'}
              placeholder='Password'
            />
            <Password />
          </article>
        </section>
        <section className='w-full'>
          <label>Numero de Telefono*</label>
          <article className='relative'>
            <Input
              type='text'
              newStyle={'w-full pl-8'}
              placeholder='Numero de telefono'
            />
            <Phone />
          </article>
        </section>
        <section className='w-full text-center'>
          <Button
            className='w-full bg-slate-three text-sm'
            placeholder='Registrarse'
          >
            Registrarse
          </Button>
        </section>
      </form>
    </>
  )
}
