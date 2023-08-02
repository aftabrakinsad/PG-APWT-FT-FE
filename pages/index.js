import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Welcome to Home</h1>
      <p className="text-center">
        <Link href={'/Login/login'}>Login</Link>
        <br></br>
        <Link href={'/Registration/registration'}>Registration</Link>
      </p>
    </div>
  )
}