import styles from './HomeView.module.css';
import ProfessionalHeadershot from '../../assets/ProfessionalHeadshot.png'
import { Helmet } from "react-helmet-async";

export default function HomeView() {

     return (
          <>
          <Helmet>
                    <title>
                         Sarah Borgelt | Software Engineer and Data Engineer
                    </title>
                    <meta
                         name="description"
                         content="Sarah Borgelt is a Software Engineer who specializes in Java, JavaScript, SQL, and React."
                    />
                    <meta
                         property="og:title"
                         content="Sarah Borgelt | Data Engineer | Software Engineer"
                    />

                    <meta
                         property="og:description"
                         content="Connect with Sarah Borgelt to discuss projects, opportunities, or collaborations in software and data engineering."
                    />


                    <meta property="og:type" content="website" />

                    <meta
                         property="og:url"
                         content="https://sarahborgelt.com/"
                    />
                    <meta property="og:image" content="https://sarahborgelt.com/ProfessionalHeadshot" />
                    <link
                         rel="canonical"
                         href="https://sarahborgelt.com/"
                    />
          </Helmet>
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
          </>
     )
}