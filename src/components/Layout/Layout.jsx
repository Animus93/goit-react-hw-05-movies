import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <>
      <header className={styles.container}>
        <ul>
          <li className={styles.navigaton}>
            <NavLink to="/goit-react-hw-05-movies/" >Главная страница</NavLink>
          </li>
          <li className={styles.navigaton}>
            <NavLink to="/goit-react-hw-05-movies/movie">Поиск</NavLink>
          </li>
        </ul>
      </header>
      <div className={styles.Outlet}>
      <Outlet />
      </div>
      <footer> @Animus 2022</footer>
    </>
  );
};

export default Layout