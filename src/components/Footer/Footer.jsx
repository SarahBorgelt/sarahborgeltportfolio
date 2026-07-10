import styles from './Footer.module.css';
import {useNavigate} from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
     const navigate = useNavigate();

     const navigateToContact = () => {
          navigate('/contact');
     }

     return (
          <>
               <div className={styles.mainFooterSection}>
                    <h1 className={styles.footerHeading}>
                         Are you interested in collaborating with me?
                    </h1>
                    <p className={`${styles.footerText} ${styles.italics}`}>
                         If so, please click on the button below to access my contact page and send me a message. I would love to hear from you!
                    </p>
                    <button className={styles.contactButton} onClick={navigateToContact}>
                         Contact Me
                    </button>
               </div>
               <div className={styles.socialLinks}>
               <a
                    href="https://www.linkedin.com/in/sarahborgelt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
               >
                    <FaLinkedin />
               </a>
               <a
                    href="https://www.facebook.com/sarah.borgelt.5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
               >
               <FaFacebook />
               </a>

               <a
               href="https://www.instagram.com/borgelts97/"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Instagram"
               >
               <FaInstagram />
               </a>
               </div>
               <p className={styles.copyright}>
                    © 2026 Sarah Borgelt. All rights reserved.
               </p>
          </>
     )
}