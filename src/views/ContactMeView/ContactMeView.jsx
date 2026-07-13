import styles from './ContactMeView.module.css';
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactMeView() {
     const form = useRef();
     const [status, setStatus] = useState("");

     const sendEmail = async (e) => {
          e.preventDefault();

          setStatus("");

          try {
               await Promise.all([
                    emailjs.sendForm(
                         import.meta.env.VITE_EMAILJS_SERVICE_ID,
                         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                         form.current,
                         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                    ),
                    emailjs.sendForm(
                         import.meta.env.VITE_EMAILJS_SERVICE_ID,
                         import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
                         form.current,
                         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                    )
               ]);

               setStatus("success");
               setTimeout(() => {
               setStatus("");
               }, 5000);
               form.current.reset();
          } catch (error) {
               console.error(error);
               setStatus("error");
               setStatus("success");
               setTimeout(() => {
               setStatus("");
               }, 5000);
          }
          };
          return (
               <>
               <h1 className={styles.title}>Contact Me</h1>
               <form ref={form} onSubmit={sendEmail} className={styles.contactMeForm}>
                    <div className={styles.first_name}>
                         <label>First Name:</label>
                         <input
                              type="text"
                              name="first_name"
                              placeholder="First Name"
                              required
                         />
                    </div>
                    <div className={styles.last_name}>
                         <label>Last Name:</label>
                         <input
                              type="text"
                              name="last_name"
                              placeholder="Last Name"
                              required
                         />
                    </div>
                    <div className={styles.phoneNumber}>
                         <label>Phone Number:</label>
                         <input
                              type="tel"
                              name="user_phone"
                              placeholder="Phone Number"
                              required
                              
                         />
                    </div>
                    <div className={styles.emailAddress}>
                         <label>Email Address:</label>
                         <input
                              type="email"
                              name="user_email"
                              placeholder="Email"
                              required
                         />
                    </div>
                    <div className={styles.message}>
                         <label>Please Enter Your Message:</label>
                         <textarea
                              name="message"
                              placeholder="Message"
                              rows="6"
                              required
                         />
                    </div>
                    <button type="submit" className={styles.submitButton}>
                         Send Message
                    </button>
               </form>
               {status === "success" && (
                    <p className={styles.success}>
                         ✓ Thanks! Your message has been sent. I'll get back to you as soon as possible.
                    </p>
               )}

               {status === "error" && (
                    <p className={styles.error}>
                         There was an error in processing your request. Please try again later.
                    </p>
               )}
          </>
     );
}
