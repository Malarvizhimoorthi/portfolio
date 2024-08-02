import React from 'react';
import gmail from './gmail.png';
import facebook from './facebook.png';
import linkedin from './linkedin.png';
import github from './github.png';
import phone from './phone.png';

import { useForm ,handleSubmit} from "react-hook-form";


function Contact()
{
    const {
        handleSubmit,
        formState: { errors },
      } = useForm("");
    return(
        <section class="contact" id="contact">
        <div class="contact-text">
            <h2>Contact <span>Me</span></h2>
            <h4>Let's work Together</h4>
            <p>I am dedicated to delivering clean, efficient code and thrive in collaborative environments where ideas
                are shared and refined.
                My goal is to contribute my skills and enthusiasm to projects that push boundaries and make a positive
                impact.</p>
            <div class="contact-list">
                <li><img width='10px' src={gmail} alt='gmail.png'/> Malarvizhimoorthi1771997@gmail.com</li>
                <li><img width='20px' src={phone} alt='phone.png'/>6369472599</li>
            </div>
            <div class="contact-icons">
                <a href="#"><img width='20px' src={gmail} alt='gmail.png'/></a>
                <a href="#"><img width='25px' src={facebook} alt='facebook.png'/></a>
                <a href="#"><img width='20px' src={linkedin} alt='linkedin.png'/></a>
                <a href="#"><img width='20px' src={github} alt='github.png'/></a>
            </div>
        </div>

        <div class="contact-form">
            <form action="Success.html" method="get"
            onSubmit={handleSubmit((data) =>
        console.log(data)
      )}>
                <input type="text" placeholder="Enter Your Name" required/>
                <input type="email" placeholder="Enter Your Email" required/>
                <input type="text" placeholder="Enter Your Subject"/>
                <textarea name="text" id="" cols="40" rows="10" placeholder="Enter Your Message"></textarea>
                <input type="submit" value="submit"  class="send"/>
            </form>
        </div>
    </section>

    
    )
}
export default Contact;