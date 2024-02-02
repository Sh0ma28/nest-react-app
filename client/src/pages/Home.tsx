import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectUser } from '../features/user/user.slice'
import { SlLogin } from 'react-icons/sl'
import './home.css'

const Home = () => {
  const user = useAppSelector(selectUser)

  return (
    <div className="home">
      <label>Добро пожаловать</label>
      <p>
        {user
          ? 'Выберите задачу из списка или создайте новую'
          : 'Войдите в аккаунт для работы с задачами'}
      </p>
      <div className="buttons">
        {user ? (
          <button>Создать</button>
        ) : (
          <div className="button">
            <div className="icon">
              <SlLogin size={32} />
            </div>
            <NavLink to="/login">Войти</NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
