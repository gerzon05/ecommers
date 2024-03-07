import Navbar from '@/components/navbar'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main>
        <Navbar />
        {children}
      </main>
    </>
  )
}
