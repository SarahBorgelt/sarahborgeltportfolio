import styles from './HomeView.module.css';
import {useNavigate} from 'react-router-dom';
import ProfessionalHeadershot from '../../assets/ProfessionalHeadshot.png'

export default function HomeView() {
     const navigate = useNavigate();

     return (
          <div className={styles.aboutMe}>
               <img src={ProfessionalHeadershot} alt="Professional Header Shot" className={styles.profileImage} />
               <h1 className={styles.name}>Sarah Borgelt</h1>
               <div className={styles.description}>
                    <p>
                         I am a software engineer with a passion for creating innovative 
                         solutions and building user-friendly applications. I enjoy working 
                         with modern web technologies and continuously learning new skills to 
                         enhance my expertise. My current tech stack includes Java (Spring Boot), JavaScript,
                         HTML, CSS, SQL (PostgreSQL, SQL Server), React, and SQL Server Integration Services (SSIS). 
                         I am familiar with tools such as pgadmin, SQL Server Management Studio, Visual Studio,
                         and Visual Studio Code. I am also experienced in using Git for version control and collaboration.
                    </p>
                    <br></br>
                    <p>
                         I am an avid learner and enjoy exploring new technologies and frameworks. 
                         I am also a strong advocate for clean code practices, code reviews, and 
                         collaborative development. I believe in the power of teamwork and strive to 
                         contribute positively to any project I am a part of. If you are interested in
                         collaborating on a project or learning more about my work, please feel free to reach out!
                    </p>
               </div>
          </div>
     )
}