import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />
      <main className="container-responsive flex-1 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
