import { Link, NavLink } from 'react-router-dom';
import styles from './MainNav.module.css';

export default function MainNav() {

     return (
          <aside className={styles.sidebar}>
               <nav className={styles.nav}>

                    <NavLink 
                         to="/"
                         className={({ isActive }) => 
                         isActive ? styles.active : styles.link}
                    >
                         Home
                    </NavLink>
               </nav>
          </aside>
     )
}