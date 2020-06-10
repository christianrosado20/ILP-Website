import React, {useState} from 'react';
import './style.scss';

import { useDispatch } from 'react-redux';
import { sendMessage } from '../../redux';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        const messageData = {
            name: name,
            email: email,
            number: number,
            company: company,
            message: message
        };
        
        dispatch(sendMessage(messageData));

        // Reset forms
        setName('');
        setEmail('');
        setNumber('');
        setCompany('');
        setMessage('');
    }

    return (
        <div className="Contact__container">
            <div className="Contact__banner">
                <div className="Contact__bannerMessage">
                    <h2>Come around and give us a visit.</h2>
                    <p>Photo by erica steeves on Unsplash</p>
                </div>
            </div>
            <div className="Contact__formAndInfo">
                <div className="Contact__formArea">
                    <form onSubmit={handleSubmit}>
                        <h3>Get in touch.</h3>
                        <label>
                            Name:
                            <br></br>
                            <input 
                                type="text" 
                                value={name} 
                                onChange={event => setName(event.target.value)} 
                                placeholder="Juan Del Barrio" 
                                required
                            />
                        </label>
                        <br></br>
                        <label>
                            E-mail:
                            <br></br>
                            <input 
                                type="email" 
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                placeholder="juan@bmail.com" 
                                required
                            />
                        </label>
                        <br></br>
                        <label>
                            Telephone:
                            <br></br>
                            <input 
                                type="text" 
                                value={number}
                                onChange={event => setNumber(event.target.value)} 
                                placeholder="(787)-123-4567" 
                                required
                            />
                        </label>
                        <br></br>
                        <label>
                            Company:
                            <br></br>
                            <input 
                                type="text" 
                                value={company} 
                                onChange={event => setCompany(event.target.value)}
                                placeholder="Company" 
                                required
                            />
                        </label>

                        <br></br>
                        <label>
                            Message:
                            <br/>
                            <textarea 
                                value={message} 
                                onChange={event => setMessage(event.target.value)} 
                                required
                            />
                        </label>
                    
                        <br></br>
                        <input type="submit" value="Send"/>
                    </form>
                </div>
                <div className="Contact__contactInfo">
                    <h3>Contact Information</h3>
                    <p>Dr. José Meléndez: Industrial Liaison Officer, Special Assistant to the Chancellor</p>
                    <p>University of Puerto Rico at Mayagüez</p>
                    <p>jose.melendez37@upr.edu</p>
                    <p>Rectoría, Edificio José de Diego, 203A</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;