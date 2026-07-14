import styles from './Header.module.css';
import Logo from '../../assets/Logo.png';

export default function Header() {


     return (
          <>
               <header className={styles.headerContainer}>
                    <img className={styles.logo} src={Logo} alt="Logo" />
               </header>
          </>
     )
}