import { Link } from 'react-router-dom'
import './header.css'
import Logo from '/vite.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div>Твой лучший менеджер задач</div>
      <button className="auth">Выход</button>
    </header>
  )
}

export default Header
