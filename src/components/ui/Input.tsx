import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLElement> {
  newStyle?: string
}

export function Input(props: Props) {
  return (
    <input
      {...props}
      className={`${props.newStyle} placeholder:text-black/70 focus:bg-slate-four border border-slate-one rounded-md px-2 py-1`}
      required
    />
  )
}
