import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function RootLayout() {
  return (
    <div>
      <Navbar />  {/* always visible */}
      <main>
        <Outlet />  {/* only this part swaps on route change */}
      </main>
    </div>
  )
}