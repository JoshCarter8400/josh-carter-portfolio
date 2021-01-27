// import React, { useState } from 'react';
// import { validateEmail } from '../../utils/helpers';
// import { capitalizeFirstLetter } from '../../utils/helpers';
// import axios from 'axios';
// import Iframe from 'react-iframe';

// function Contact() {
//   const [errorMessage, setErrorMessage] = useState('');
//   const [contactState, setContactState] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const { name, email, subject, message } = contactState;

//   function handleChange(e) {
//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       console.log(isValid);
//       // isValid conditional statement
//       if (!isValid) {
//         setErrorMessage('Please enter a valid email');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required`);
//       } else {
//         setErrorMessage('');
//       }
//     }

//     if (!errorMessage) {
//       setContactState({ ...contactState, [e.target.name]: e.target.value });
//     }
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     axios({
//       method: 'POST',
//       url: '/send',
//       data: contactState,
//     }).then((response) => {
//       if (response.data.status === 'success') {
//         alert('Message Sent!');
//         setContactState({ name: '', email: '', subject: '', message: '' });
//       } else if (response.data.status === 'fail') {
//         alert('Message failed to send');
//       }
//     });

//     console.log(contactState);
//   }

//   return (
//     <main id="main">
//       <section id="contact" className="contact">
//         <div className="container">
//           <div className="section-title">
//             <h2>Contact</h2>
//             <p>
//               Please feel free to contact me with any questions that you may
//               have I am here to be helpful any way I can. I Look forward to
//               working with you!
//             </p>
//           </div>

//           <div className="row" data-aos="fade-in">
//             <div className="col-lg-5 d-flex align-items-stretch">
//               <div className="info">
//                 <div className="address">
//                   <i className="icofont-google-map"></i>
//                   <h4>Location:</h4>
//                   <p>Old Town Key West, FL 33040</p>
//                 </div>

//                 <div className="email">
//                   <i className="icofont-envelope"></i>
//                   <h4>Email:</h4>
//                   <p>
//                     <a href="mailto:joshcarter8400@gmail.com">
//                       joshcarter8400@gmail.com
//                     </a>
//                   </p>
//                 </div>

//                 <div className="phone">
//                   <i className="icofont-phone"></i>
//                   <h4>Call:</h4>
//                   <p>305-896-2811</p>
//                 </div>
//               </div>

//               {/* <Iframe
//                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
//                 frameborder="0"
//                 styles={{
//                   border: "0",
//                   width: "100%",
//                   height: "290px",
//                   position: "absolute",
//                 }}
//                 allow="fullscreen"
//               /> */}
//             </div>

//             <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
//               <form className="php-email-form" onSubmit={handleSubmit}>
//                 <div className="row">
//                   <div className="form-group col-md-6">
//                     <label for="name">Your Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       defaultValue={name}
//                       onBlur={handleChange}
//                       className="form-control"
//                       id="name"
//                     />
//                     <div className="validate"></div>
//                   </div>
//                   <div className="form-group col-md-6">
//                     <label for="name">Your Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       defaultValue={email}
//                       onBlur={handleChange}
//                       className="form-control"
//                       id="email"
//                     />
//                     <div className="validate"></div>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label for="name">Subject</label>
//                   <input
//                     type="text"
//                     name="subject"
//                     defaultValue={subject}
//                     onBlur={handleChange}
//                     className="form-control"
//                     id="subject"
//                   />
//                   <div className="validate"></div>
//                 </div>
//                 <div className="form-group">
//                   <label for="name">Message</label>
//                   <textarea
//                     className="form-control"
//                     name="message"
//                     defaultValue={message}
//                     onBlur={handleChange}
//                     rows="10"
//                   ></textarea>
//                 </div>
//                 {errorMessage && (
//                   <div>
//                     <p className="error-text">
//                       <strong>{errorMessage}</strong>
//                     </p>
//                   </div>
//                 )}
//                 <div className="text-center">
//                   <button type="submit">Send Message</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Contact;
