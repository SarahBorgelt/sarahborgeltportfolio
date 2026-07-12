import styles from './AboutMeView.module.css';
import { Swiper, SwiperSlide } from "swiper/react";

//Photo import
import AirboatTour from '../../assets/PhotoReel/AirboatTour.jpg'
import IceSkatingRockefeller from '../../assets/PhotoReel/IceSkatingRockefeller.jpg'
import KayakingEverglades from '../../assets/PhotoReel/KayakingEverglades.jpg'
import LavenderFarm from '../../assets/PhotoReel/LavenderFarm.jpg'
import RidingLipps from '../../assets/PhotoReel/RidingLipps.jpg'
import SegwayTours from '../../assets/PhotoReel/SegwayTours.jpg'
import SwimmingWithSeal from '../../assets/PhotoReel/SwimmingWithSeal.jpg'
import TexasAandM from '../../assets/PhotoReel/TexasAandM.jpg'
import WestVirginia from '../../assets/PhotoReel/WestVirginia.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import modules
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";

export default function AboutMeView() {
     return (
          <>
               <div className={styles.slideshowAndDescription}>
                    <Swiper
                         modules={[Navigation, Pagination, Keyboard, Autoplay]}
                         navigation
                         pagination={{ clickable: true }}
                         keyboard={{ enabled: true }}
                         spaceBetween={30}
                         slidesPerView={1}
                         loop={true}
                         autoplay={{
                              delay: 5000,
                              disableOnInteraction: false,
                         }}
                    >
                              <SwiperSlide>
                                   <figure>
                                        <img
                                             src={AirboatTour}
                                             alt="Exploring new environments and embracing unique experiences, including an airboat tour through the Florida Everglades."
                                             className={styles.slideImage}
                                        />
                                        <figcaption className={styles.figcaption}>
                                             Exploring new environments and embracing unique experiences, including an airboat tour through the Florida Everglades.
                                        </figcaption>
                                   </figure>
                              </SwiperSlide>
                              <SwiperSlide>
                                   <figure>
                                        <img
                                             src={IceSkatingRockefeller}
                                             alt="A love for travel means always making time for iconic experiences — including ice skating at Rockefeller Center."
                                             className={styles.slideImage}
                                        />
                                        <figcaption className={styles.figcaption}>
                                             A love for travel means always making time for iconic experiences — including ice skating at Rockefeller Center.
                                        </figcaption>
                                   </figure>
                              </SwiperSlide>
                              <SwiperSlide>
                                   <figure>
                                        <img
                                             src={KayakingEverglades}
                                             alt="Spending time outdoors and connecting with nature is one of Sarah's favorite ways to recharge."
                                             className={styles.slideImage}
                                        />
                                        <figcaption className={styles.figcaption}>
                                             Spending time outdoors and connecting with nature is one of Sarah's favorite ways to recharge.
                                        </figcaption>
                                   </figure>
                              </SwiperSlide>
                              <SwiperSlide>
                                   <figure>
                                        <img src={LavenderFarm}
                                        alt="Sarah Sarah enjoys discovering unique destinations and appreciating the small details that make each place special."
                                        className={styles.slideImage}/>
                                        <figcaption className={styles.figcaption}>
                                             Sarah enjoys discovering unique destinations and appreciating the small details that make each place special.
                                        </figcaption>
                                   </figure>
                              </SwiperSlide>
                              <SwiperSlide>
                                   <figure>
                                        <img src={RidingLipps}
                                        alt="A lifelong equestrian, Sarah values the discipline, dedication, and connection developed through riding."
                                        className={styles.slideImage}/>
                                        <figcaption className={styles.figcaption}>
                                             A lifelong equestrian, Sarah values the discipline, dedication, and connection developed through riding.
                                        </figcaption>
                                   </figure>
                              </SwiperSlide>
                              <SwiperSlide>
                                   <figure>
                                        <img src={SegwayTours}
                                        alt="Sarah enjoys sharing experiences with friends and embracing opportunities to learn something new."
                                        className={styles.slideImage}/>
                                        <figcaption className={styles.figcaption}>
                                             Sarah enjoys sharing experiences with friends and embracing opportunities to learn something new.
                                        </figcaption>
                                   </figure>
                              </SwiperSlide>
                              <SwiperSlide>
                                   <figure>
                                        <img src={SwimmingWithSeal}
                                        alt="Sarah believes in making the most of every opportunity, including unforgettable experiences like swimming with a seal in Miami."
                                        className={styles.slideImage}/>
                                        <figcaption className={styles.figcaption}>
                                             Sarah believes in making the most of every opportunity, including unforgettable experiences like swimming with a seal in Miami.
                                        </figcaption>
                                   </figure>
                              </SwiperSlide>
                              <SwiperSlide>
                                   <figure>
                                        <img src={TexasAandM}
                                        alt="A proud 2023 Texas A&M University graduate, Sarah values lifelong learning and continued growth."
                                        className={styles.slideImage}/>
                                        <figcaption className={styles.figcaption}>
                                             A proud 2023 Texas A&M University graduate, Sarah values lifelong learning and continued growth.
                                        </figcaption>
                                   </figure>
                              </SwiperSlide>
                              <SwiperSlide>
                                   <figure>
                                        <img src={WestVirginia}
                                        alt="Traveling allows Sarah to experience new communities, appreciate different perspectives, and continue learning beyond the workplace."
                                        className={styles.slideImage}
                                        />
                                        <figcaption className={styles.figcaption}>
                                             Traveling allows Sarah to experience new communities, appreciate different perspectives, and continue learning beyond the workplace.
                                        </figcaption>
                                   </figure>
                              </SwiperSlide>
                         </Swiper>
                         <div className={styles.aboutMeCompleteView}>
                              <h1 className={styles.title}>About Me</h1>
                              <div className={styles.descriptionTextAboutMe}>
                                   <p className={styles.aboutMeDescription}>
                                        Sarah Borgelt is a full-stack software engineer and data professional with a passion for 
                                        solving complex problems, improving processes, and creating meaningful solutions. 
                                        Her career journey has been shaped by curiosity, adaptability, and a commitment to 
                                        continuous growth.
                                   </p>
                                   <br></br>
                                   <p className={styles.aboutMeDescription}>With a background spanning finance, supply chain, and technology, Sarah brings a unique 
                                        perspective to every challenge she encounters. She earned her Bachelor of Science in 
                                        Finance from the University of Findlay and her Master of Business Administration in Finance 
                                        and International Business from Texas A&M University–Corpus Christi. Before transitioning 
                                        into technology, Sarah spent six years working in supply chain roles within Fortune 500 
                                        organizations, where she developed a strong understanding of business operations, process 
                                        optimization, and the importance of data-driven decision-making.
                                   </p>
                                   <br></br>
                                   <p className={styles.aboutMeDescription}>
                                        Sarah's transition into software development began with a desire to continue learning 
                                        and explore new ways to solve problems. After discovering a passion for programming, 
                                        she pursued additional training and transitioned into technology, where she now works 
                                        as a data engineer building and maintaining ETL pipelines in an information-intensive 
                                        industry. She enjoys designing efficient solutions, improving user experiences, and 
                                        leveraging technology to make complex processes more effective.
                                   </p>
                                   <br></br>
                                   <p className={styles.aboutMeDescription}>
                                        Outside of her professional career, Sarah is passionate about giving back to her community, 
                                        exploring new places, and spending time outdoors. As a lifelong equestrian, she has developed 
                                        a deep appreciation for discipline, perseverance, and dedication — values that continue to 
                                        influence her personal and professional life.
                                   </p>
                                   <br></br>
                                   <p className={styles.aboutMeDescription}>
                                        Sarah believes that success is built through integrity, kindness, leadership, and a willingness 
                                        to embrace new challenges. She is always seeking opportunities to learn, collaborate, and create 
                                        a positive impact through both technology and community involvement.
                                   </p>
                              </div>
                         </div>
                    </div>
          </>
     )
}