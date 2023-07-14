import React, {useState, useEffect} from "react";
import './connect.css'
import { useForm } from '@formspree/react';
import Linkedin from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import Github from '../../assets/github.png'

function Connect () {
    const [isMobileWidth, setIsMobileWidth] = useState(false);
    const [state, handleSubmit] = useForm("mrgwgrab");

    const openSocialMedia = (platform) => {
        let url = '';

        switch (platform) {
            case 'linkedin':
                url = 'https://www.linkedin.com/in/iris94'
                break;
            case 'instagram':
                url = 'https://www.instagram.com/mirza.iris/';
                break;
            case 'facebook':
                url = 'https://www.facebook.com/mirza.iris/';
                break;
            case 'github':
                url = 'https://github.com/Iris94';
                break;
            default:
                break;
        }

        window.open(url, '_blank')
    }
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobileWidth(window.innerWidth <= 800);
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    return (
        <>
        <div className={isMobileWidth ? 'connect-mobile' : 'connect-div'}>
            <div className="connect-plans">
                <div>
                    <h3>Future</h3>
                    <p>I am currently investing all of my time to become an expert in React. After that, I plan to learn Angular, Svelte, or Vue. I am really passionate about CSS, so advanced concepts are something I aspire to know. Additionally, I am also focusing on backend development as becoming a full stack developer is my goal</p>
                </div>
            </div>
            <div className="connect-form">
                <div>
                    <form id="contact-form" onSubmit={handleSubmit}>
                    <input type='text' name='user_name' placeholder='Name' className="form-input" />
                    <hr/>
                    <input type='email' name='user_email' placeholder='Email' className="form-input"/>
                    <hr/>
                    <textarea name='message' placeholder='Message' className="form-text"/>
                    <br/>
                    <input type='submit' value='Send' className="form-send-input" disabled={state.submitting}/>
                    </form>
                    {state.succeeded && <p className="thanks">Thank you for sending an email</p>}
                </div>
            </div>
            <div className="connect-social">
                <div>
                    <h3>Social Media</h3>
                    <div className="socialMedia">
                        <img src={Linkedin} alt="ld-png" onClick={() => openSocialMedia('linkedin')}/>
                        <img src={Instagram} alt="ig-png" onClick={() => openSocialMedia('instagram')}/>
                        <img src={Facebook} alt="fb-png" onClick={() => openSocialMedia('facebook')}/>
                        <img src={Github} alt="gh-png" onClick={() => openSocialMedia('github')} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Connect;