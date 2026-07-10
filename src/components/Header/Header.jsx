import styles from './Header.module.css';
import {useNavigate} from 'react-router-dom';

export default function Header() {
     const navigate = useNavigate();

     return (
          <p className={styles.text}>
               Header Component
          </p>
     )
}