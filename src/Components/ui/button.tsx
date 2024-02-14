import { Button } from '@material-tailwind/react'
type Props = {
  name: string
}

export function ButtonDefault(props: Props) {
  return <Button placeholder={props.name}>{props.name}</Button>
}
