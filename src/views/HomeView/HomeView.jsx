import styles from './HomeView.module.css';
import ProfessionalHeadershot from '../../assets/ProfessionalHeadshot.png'

export default function HomeView() {

     return (
          <div className={styles.aboutMe}>
               <img src={ProfessionalHeadershot} alt="Professional Header Shot" className={styles.profileImage} />
               <div className={styles.intro}>
               <h1 className={styles.name}>Sarah Borgelt</h1>
               <div className={styles.description}>
                    <p>
                         Sarah Borgelt is a software engineer with a passion for creating innovative 
                         solutions and building user-friendly applications. She enjoys working 
                         with modern web technologies and continuously learning new skills to 
                         enhance her expertise. Her current tech stack includes Java (Spring Boot), JavaScript,
                         HTML, CSS, SQL (PostgreSQL, SQL Server), React, and SQL Server Integration Services (SSIS). 
                         She is familiar with tools such as pgadmin, SQL Server Management Studio, Visual Studio,
                         and Visual Studio Code. She is also experienced in using Git for version control and collaboration.
                    </p>
                    <br></br>
                    <p>
                         She is an avid learner and enjoys exploring new technologies and frameworks. 
                         She is also a strong advocate for clean code practices, code reviews, and 
                         collaborative development. She believes in the power of teamwork and strives to 
                         contribute positively to any project she is a part of. If you are interested in
                         collaborating on a project or learning more about her work, please feel free to reach out!
                    </p>
               </div>
               </div>
          </div>
     )
}