import styles from './CareerView.module.css';
import ProfessionalHeadshot2 from '../../assets/ProfessionalHeadshot2.jpg'

export default function CareerView() {
     const journey = [
     {
          year: "2015",
          icon: "🎓",
          title: "Building a Business Foundation",
          description:
          "Sarah began her journey studying finance at the University of Findlay, developing an understanding of business operations, analytics, and decision-making."
     },
     {
          year: "2019 - 2025",
          icon: "📦",
          title: "Learning Through Supply Chain",
          description:
          "Sarah spent six years supporting Fortune 500 organizations, improving processes, solving operational challenges, and learning how businesses use data to drive decisions. During this time, she also obtained her MBA in Finance and International Business through Texas A&M University - Corpus Christi."
     },
     {
          year: "2025",
          icon: "💡",
          title: "A New Challenge",
          description:
          "After discovering programming, Sarah found a new way to approach problem-solving and began exploring software development."
     },
     {
          year: "2026",
          icon: "💻",
          title: "Transition Into Technology",
          description:
          "Through dedicated learning and software development training, Sarah combined her business background with technical skills and moved into technology full-time."
     },
     {
          year: "Today",
          icon: "🗄️",
          title: "Data Engineering",
          description:
          "Sarah builds and maintains ETL pipelines, improves data processes, and creates reliable solutions in an information-intensive industry."
     }
];

     return (
          <>
               <h1 className={styles.title}>Building bridges between business challenges and technical solutions</h1>
               <div className={styles.careerPageLayout}>
                    <section className={styles.timeline}>
                    {journey.map((step, index) => (
                         <div 
                              key={index}
                              className={styles.timelineItem}
                         >
                              <div className={styles.icon}>
                                   {step.icon}
                              </div>

                              <div className={styles.card}>
                                   <p>{step.year}</p>
                                   <h2>{step.title}</h2>
                                   <span>
                                        {step.description}
                                   </span>
                              </div>
                         </div>
                    ))}
               </section>
                    <div className={styles.careerDescription}>
                         <p>
                              Sarah Borgelt is a technology professional with a unique background spanning finance, 
                              supply chain operations, data engineering, and software development. With over six years 
                              of experience supporting Fortune 500 organizations, Sarah developed a strong foundation in 
                              business processes, operational efficiency, and data-driven decision-making before transitioning 
                              into technology.
                         </p>
                         <br></br>
                         <p>
                              After discovering a passion for programming, Sarah pursued software development training 
                              and began building upon her analytical and problem-solving background. This career 
                              transition allowed her to combine her understanding of complex business environments 
                              with her interest in creating innovative technical solutions.
                         </p>
                         <br></br>
                         <p>
                              Today, Sarah works as a Data Engineer in an information-intensive industry, where she 
                              designs, develops, and maintains ETL pipelines that support reliable data movement and 
                              accessibility. She enjoys solving complex technical challenges, improving inefficient 
                              processes, and building solutions that create meaningful value for both users and 
                              organizations.
                         </p>
                         <br></br>
                         <p>
                              Sarah's background in finance and supply chain gives her a unique perspective when 
                              approaching technology challenges. She understands that successful solutions require more 
                              than technical expertise — they require an understanding of business goals, collaboration 
                              across teams, and thoughtful consideration of the people who rely on those solutions.
                         </p>
                         <br></br>
                         <p>
                              Throughout her career, Sarah has remained committed to lifelong learning, continuous 
                              improvement, and professional growth. She is passionate about leveraging technology to 
                              simplify complex problems, enhance user experiences, and create systems that are efficient, 
                              scalable, and impactful.
                         </p>
                         <br></br>
                         <img src={ProfessionalHeadshot2} alt="An image of Sarah Borgelt" className={styles.careerHeadshot}/>
                    </div>
               </div>
          </>
     )
}