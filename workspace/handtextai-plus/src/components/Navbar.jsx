import { NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${
    isActive ? 'text-white bg-brand' : 'text-gray-700 hover:text-brand'
  }`

function Navbar() {
  return (
    <header className="bg-white shadow-soft">
      <div className="container-responsive flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-brand">HandTextAI Plus</span>
        </NavLink>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/generator" className={navLinkClass}>
            Handwriting Generator
          </NavLink>
          <NavLink to="/notebook" className={navLinkClass}>
            Notebook
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

