import { Link, NavLink } from 'react-router-dom';
import styles from './MainNav.module.css';

export default function MainNav() {

     return (
          <aside className={styles.navbar}>
               <nav className={styles.nav}>

                    <NavLink 
                         to="/"
                         className={({ isActive }) => 
                         isActive ? styles.active : styles.link}
                    >
                         Home
                    </NavLink>
                    <span className={styles.divider}></span>
                    <NavLink 
                         to="/aboutme"
                         className={({ isActive }) => 
                         isActive ? styles.active : styles.link}
                    >
                         About Me
                    </NavLink>
                    <span className={styles.divider}></span>
                    <NavLink 
                         to="/career"
                         className={({ isActive }) => 
                         isActive ? styles.active : styles.link}
                    >
                         Career
                    </NavLink>
                    <span className={styles.divider}></span>
                    <NavLink 
                         to="/philanthropy"
                         className={({ isActive }) => 
                         isActive ? styles.active : styles.link}
                    >
                         Philanthropy
                    </NavLink>
                    <span className={styles.divider}></span>
                    <NavLink 
                         to="/contact"
                         className={({ isActive }) => 
                         isActive ? styles.active : styles.link}
                    >
                         Contact
                    </NavLink>
               </nav>
          </aside>
     )
}