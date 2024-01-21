import React from 'react'
import './contact.css'

function Contact() {
  return (
    <section className="contact section" id="contact">
        <h2 className="section_title">Contact Me</h2>
        <span className="section_subtitle">Ready to chat?</span>

        <div className="contact_container container grid">
            <div className="contact_content">
                
                <div className="contact_info">
                    <div className="contact_card">
                        <i className="uil uil-envelope contact_card-icon"></i>

                        <h3 className="contact_card-title">Email</h3>
                        <span className="contact_card-data">piacentekauan@gmail.com</span>

                        <a href="mailto:piacentekauan@gmail.com.com" className="contact_button" target="_blank">Write me
                        <i className=" contact_button-icon"></i>
                        </a>
                    </div>

                    <div className="contact_card">
                        <i className="uil uil-whatsapp contact_card-icon"></i>

                        <h3 className="contact_card-title">WhatsApp</h3>
                        <span className="contact_card-data">(19) 99927-6364</span>

                        <a href="https://wa.me/5519999276364" className="contact_button" target="_blank">Write me 
                        <i className=" contact_button-icon"></i>
                        </a>
                    </div>

                    <div className="contact_card">
                        <i className="uil uil-linkedin-alt contact_card-icon"></i>

                        <h3 className="contact_card-title">LinkedIn</h3>
                        <span className="contact_card-data">Kauan Piacente</span>

                        <a href="https://www.linkedin.com/in/kauanmpiacente/" className="contact_button" target="_blank">Write me 
                        <i className=" contact_button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact_content">
                <h3 className="contact_title-let">Let's talk about your ideas</h3>

                <form className="contact_form">
                    <div className="contact_form-div-name">
                        <label className="contact_form-tag">Name</label>
                        <input 
                        type="text" 
                        name='name' 
                        className='contact_form-input' 
                        placeholder="Insert your name"/>


                    </div>

                    <div className="contact_form-div-mail">
                        <label className="contact_form-tag">Mail</label>
                        <input 
                        type="email" 
                        name='email' 
                        className='contact_form-input' 
                        placeholder="Insert your email"/>
                    </div>

                    <div className="contact_form-div-message">
                        <label className="contact_form-tag">Message</label>
                        <input 
                        type="text" 
                        name='subject' 
                        className='contact_form-input' 
                        placeholder="Insert the subject"/>
                    </div>
                    
                </form>
            </div>
            <button href="#contact" className="button button--flex">Sand Message</button>
        </div>
    </section>
  )
}

export default Contact