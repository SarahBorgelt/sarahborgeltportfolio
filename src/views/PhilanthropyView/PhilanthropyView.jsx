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
                              Sarah Borgelt is a big supporter of philanthropy and enjoys giving back to the 
                              community in a variety of ways. When her mother, <a href="https://penwellfuneralhome.com/obituaries/rhonda-k-steele-borgelt/" target="blank">Rhonda K. Borgelt</a>
                              , passed away unexpectedly in January of 2025, she wanted to find a way to honor her mother. Using her 
                              education in Finance, she invested the proceeds of her mother's life insurance money into a certificate of deposit. With
                              the proceeds, she donates half to various non-profits in the area in honor of her late mother and invests the other half
                              to ensure the memorial fund's continuity long-term. 
                         </p>
                         <br></br>
                         <p>
                              To date, the following non-profits have benefited from these annual donations:
                         </p>
                         <ul className={styles.nonprofitlist}>
                              <li><a href='https://marvinlibrary.org/' target='blank'>Marvin Memorial Library</a></li>
                              <li><a href='https://shelbyk12.org/' target='blank'>Shelby City Schools</a></li>
                         </ul>
                         <br></br>
                         <p>
                              Beyond her mother's memorial fund, Sarah is passionate about giving back to the community and has donated
                              over $10,000 to the below organizations to date:
                         </p>
                         <ul className={styles.nonprofitlist}>
                              <li><a href='https://www.gsoh.org/' target='blank'>Girl Scouts of America</a></li>
                              <li><a href='https://www.hrc.org/' target='blank'>Human Rights Campaign</a></li>
                              <li><a href='https://rentickets.org/' target='blank'>Renaissance Performing Arts Center</a></li>
                              <li><a href='https://www.richlandcountyfoundation.org/' target='blank'>Richland County Foundation</a></li>
                              <li><a href='https://www.theshelbyfoundation.org/' target='blank'>Shelby Foundation</a></li>
                              <li><a href='http://www.shelbyhelpline.org/'>Shelby Helpline</a></li>
                              <li><a href='https://www.thetrevorproject.org/' target='blank'>Trevor Project</a></li>
                              <li><a href='https://getinvolved.tamu.edu/org/ihsa' target='blank'>Texas A&M IHSA Equestrian Team</a></li>
                              <li><a href='https://equusfoundation.org/riderscloset/riderscloset.php' target='blank'>The Rider's Closet</a></li>
                              <li><a href='http://findlay.edu/' target='blank'>The University of Findlay</a></li>
                         </ul>
                    </div>
                    <br></br>
               </div>
          </div>
     )
}