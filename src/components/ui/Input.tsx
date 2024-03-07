import type { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLElement> {
  newstyle?: string
}

export function Input(props: Props) {
  return (
    <input
      {...props}
      className={`${props.newstyle} placeholder:text-black/70 focus:bg-slate-four border border-slate-one rounded-md px-2 py-1`}
      required
    />
  )
}
