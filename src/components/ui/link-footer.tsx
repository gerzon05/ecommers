import type { LinkHTMLAttributes } from 'react'

type Props = LinkHTMLAttributes<HTMLElement>

export function LinkFooter(props: Props) {
  return (
    <a {...props} className="hover:text-slate-three block">
      {props.children}
    </a>
  )
}
