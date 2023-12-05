import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  )
}
