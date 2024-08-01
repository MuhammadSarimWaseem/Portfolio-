import React, { Fragment, useState } from 'react';
import './Contact.css'
import { Button } from '@mui/material';
import 'aos/dist/aos.css';

function Contact() {
    const [contactInput, setContactInput] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const ContactInputHandler = (event) => {
        const { name, value } = event.target;
        setContactInput((prevInput) => ({
            ...prevInput,
            [name]: value
        }));
    }

    const [contactMessage, setContactMessage] = useState(null);
    const FetchContacts = async (e) => {
        e.preventDefault()
        const { name, email, subject, message } = contactInput;

        if (name && email && subject && message) {
            const res = await fetch(process.env.REACT_APP_FIREBASE_DATABASE_URL, {
                method: "POST",
                headers: { "content-type": "application/json", },
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message
                })
            })
            if (res.ok) {
                setContactMessage("Message sent successfully!");
                setTimeout(() => {
                    setContactMessage(null);
                }, 5000);
                setContactInput({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                })
            } else {
                setContactMessage("Failed to send message. Please try again.");
            }
        } else {
            setContactMessage("Please fill All the fields")
        }
    }
    return (
        <Fragment>
            <section className="contact-me" id="let's-connect">
                <h1 >LET'S CONNECT</h1>
                <div data-aos="fade-down" className="contact-box">
                    <form>
                        <div className="inputbox">
                            <input onChange={ContactInputHandler} type="text" name="name" required="required" value={contactInput.name} />
                            <label>Name</label>
                        </div>
                        <div className="inputbox">
                            <input onChange={ContactInputHandler} type="email" name="email" required="required" value={contactInput.email} />
                            <label>Email</label>
                        </div>
                        <div className="inputbox">
                            <input onChange={ContactInputHandler} type="text" name="subject" required="required" value={contactInput.subject} />
                            <label>Subject</label>
                        </div>
                        <div className="inputbox">
                            <textarea onChange={ContactInputHandler} name="message" id="message" rows="5" required="required" value={contactInput.message}></textarea>
                            <label>Type Your Message...</label>
                        </div>
                        <div className="submit">
                            <Button onClick={FetchContacts} type="submit" className="submit-btn">SEND</Button>
                        </div>
                        {contactMessage && <div className="message">{contactMessage}</div>}
                    </form>
                </div>
            </section>
        </Fragment>
    );
}

export default Contact;