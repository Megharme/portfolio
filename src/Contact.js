import React from 'react';
import './Contact.css';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
  return (
    <div className='contact'>
          <div className="contact__wrap">
              <a href='mailto://meghar1498@gmail.com'>
                <div className="contact__contact">
                    <EmailRoundedIcon className='contact__icon' fontSize="small" color="disabled"/>
                </div>
              </a>
              <a href='https://www.linkedin.com/in/megha-r-b511671b1'>
                <div className="contact__contact">
                      <LinkedInIcon className='contact__icon' fontSize="small" color="disabled" />
                </div>
              </a>
              <a href='https://www.instagram.com/a_h_g_e_m/'>
              <div className="contact__contact">
                <InstagramIcon className='contact__icon' fontSize="small" color="disabled"/>
            </div> 
              </a>
            
          </div>
    </div>
  )
}

export default Contact
