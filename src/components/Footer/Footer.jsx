import styles from './Footer.module.css';
import {useNavigate} from 'react-router-dom';

export default function Footer() {
     const navigate = useNavigate();

     return (
          <p className={styles.copyright}>
               © 2026 Sarah Borgelt. All rights reserved.
          </p>
     )
}