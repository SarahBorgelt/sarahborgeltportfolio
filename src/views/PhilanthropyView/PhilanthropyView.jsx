//Mom's memorial fund, other charitable giving, and volunteer work.  
// This page will be updated as I continue to do more philanthropic work.  
import styles from './PhilanthropyView.module.css';
import Penne from '../../assets/Penne.jpg';

export default function PhilanthropyView() {
     return (
          <div className={styles.philanthropy}>
               <figure className={styles.figure}>
                    <img src={Penne} alt="Penne" className={styles.penneImage} />
                    <figcaption className={styles.caption}>
                         Penne is Sarah's rescue cat. He was found in a condemned house with 13 other cats. At the time of adoption, he was found to have a heart murmur, ear infection, eye infection, and tape worm.
                         Sarah took him in and nursed him back to health. After a long recovery process, he is now a happy and healthy cat who loves to play and cuddle.

                    </figcaption>
               </figure>
               <br></br>
               <div className={styles.text}>
                    <h1 className={styles.title}>Philanthropy</h1>
                    <div className={styles.philanthropyDescription}>
                         <p>
                              Sarah Borgelt believes that success carries a responsibility to give back. Guided by the 
                              philosophy of leaving the world better than she found it, she is committed to supporting 
                              organizations that strengthen local communities, expand educational opportunities, promote 
                              equality, and improve the lives of both people and animals.
                         </p>
                         <br></br>
                         <p>
                              When her mother, <a href="https://penwellfuneralhome.com/obituaries/rhonda-k-steele-borgelt/" target="_blank" rel="noopener noreferrer">Rhonda K. Borgelt</a>
                              , passed away unexpectedly in January of 2025, Sarah wanted to find a way to honor her mother. Using her 
                              education in Finance, she invested the proceeds of her mother's life insurance money into a certificate of deposit. With
                              the proceeds, she donates half to various non-profits in the area in honor of her late mother and invests the other half
                              to ensure the memorial fund's continuity long-term. 
                         </p>
                         <br></br>
                         <p>
                              To date, the following non-profits have benefited from these annual donations:
                         </p>
                         <ul className={styles.nonprofitlist}>
                              <li><a href='https://marvinlibrary.org/' target='_blank' rel="noopener noreferrer">Marvin Memorial Library (2025)</a></li>
                              <li><a href='https://shelbyk12.org/' target='_blank' rel="noopener noreferrer">Shelby City Schools (2026)</a></li>
                         </ul>
                         <br></br>
                         <p>
                              In addition to the memorial fund, Sarah actively supports organizations whose missions align with her 
                              personal values. Her charitable giving focuses on a varity of causes, including education, youth leadership, community development, 
                              animal welfare, the performing arts, and equal rights. To date, she has contributed more than $10,000 
                              to organizations including:
                         </p>
                         <ul className={styles.nonprofitlist}>
                              <li><a href='https://www.gsoh.org/' target='_blank' rel="noopener noreferrer">Girl Scouts of America</a></li>
                              <li><a href='https://www.hrc.org/' target='_blank' rel="noopener noreferrer">Human Rights Campaign</a></li>
                              <li><a href='https://rentickets.org/' target='_blank' rel="noopener noreferrer">Renaissance Performing Arts Center</a></li>
                              <li><a href='https://www.richlandcountyfoundation.org/' target='_blank' rel="noopener noreferrer">Richland County Foundation</a></li>
                              <li><a href='https://www.theshelbyfoundation.org/' target='_blank' rel="noopener noreferrer">Shelby Foundation</a></li>
                              <li><a href='http://www.shelbyhelpline.org/' target='_blank' rel="noopener noreferrer">Shelby Helpline</a></li>
                              <li><a href='https://www.thetrevorproject.org/' target='_blank' rel="noopener noreferrer">Trevor Project</a></li>
                              <li><a href='https://getinvolved.tamu.edu/org/ihsa' target='_blank' rel="noopener noreferrer">Texas A&M IHSA Equestrian Team</a></li>
                              <li><a href='https://equusfoundation.org/riderscloset/riderscloset.php' target='_blank' rel="noopener noreferrer">The Rider's Closet</a></li>
                              <li><a href='http://findlay.edu/' target='_blank' rel="noopener noreferrer">The University of Findlay</a></li>
                         </ul>
                         <br></br>
                         <p> 
                              In addition to charitable giving, Sarah Borgelt volunteers annually with <a href="https://clevelandgivecamp.org/" target="_blank" rel="noopener noreferrer">Cleveland GiveCamp</a>, 
                              a nonprofit organization that brings together technology professionals to develop websites and software solutions for local nonprofit 
                              organizations at no cost. 
                         </p>
                         <br></br>
                         <p>
                              Through this work, she uses her technical skills to help community organizations expand their impact 
                              and better serve those who rely on them. 
                         </p>
                    </div>
                    <br></br>
               </div>
          </div>
     )
}