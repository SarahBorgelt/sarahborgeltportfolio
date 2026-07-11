import styles from './Header.module.css';
import Logo from '../../assets/Logo.png';
import HeaderHeadshot from '../../assets/HeaderHeadshot.png';

export default function Header() {


     return (
          <>
          <div className={styles.headerContainer}>
               <img className={styles.headshot} src={HeaderHeadshot} alt="Header Headshot" />
               <img className={styles.logo} src={Logo} alt="Logo" />
               <p className={styles.text}>
                    Header Component
               </p>
          </div>
          </>
     )
}