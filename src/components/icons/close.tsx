interface Props {
  style: string
}

export function Close(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-xbox-x ${props.style}`}
      width="30"
      height="30"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
      <path d="M9 8l6 8" />
      <path d="M15 8l-6 8" />
    </svg>
  )
}
