import React, {useState} from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { createFaculty } from '../../redux';

const FacultyForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [quote, setQuote] = useState('');
    const [collaboration, setCollaboration] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        const facultyData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            position: position,
            profilePic: profilePic,
            quote: quote,
            collaboration: collaboration
        };

        dispatch(createFaculty(facultyData));
    }

    return (
        <div className="StudentForm__container">
            <form className="FacultyForm__form"onSubmit={handleSubmit}>
                        <h3>Create your Faculty Profile. </h3>
                        <hr></hr>
                        <label>
                            First Name:
                            <br></br>
                            <input 
                                type="text" 
                                value={firstName} 
                                onChange={event => setFirstName(event.target.value)} 
                                placeholder="Juan" 
                                required
                            />
                        </label>
                        <br></br>
                        <label>
                            Last Name:
                            <br></br>
                            <input 
                                type="text" 
                                value={lastName} 
                                onChange={event => setLastName(event.target.value)} 
                                placeholder="Del Barrio" 
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
                            Position:
                            <br></br>
                            <input 
                                type="text" 
                                value={position}
                                onChange={event => setPosition(event.target.value)} 
                                placeholder="Prof. Topic" 
                                required
                            />
                        </label>
                        <br></br>
                        <label>
                            Profile Picture:
                            <br></br>
                            <input 
                                type="file" 
                                value={profilePic} 
                                onChange={event => setProfilePic(event.target.value)}
                                required
                            />
                        </label>

                        <br></br>
                        <label>
                            Quote:
                            <br/>
                            <textarea 
                                value={quote} 
                                onChange={event => setQuote(event.target.value)} 
                                required
                            />
                            <br/>
                            Quote or a sentence that communicates your personality
                        </label>
                        <br></br>
                        <label>
                            Type of collaboration:
                            <br/>
                            <textarea 
                                value={collaboration} 
                                onChange={event => setCollaboration(event.target.value)} 
                                placeholder="Quote or a sentence that communicates your personality"
                                required
                            />
                            <br/>
                            Enter a sentence that describes the type of collaboration you would like to have with industry. If you have a specific request of an industry partner for our project idea. (5 sentences max)
                        </label>
                    
                        <br></br>
                        <input type="submit" value="Send"/>
                    </form>
        </div>
    )
}

export default FacultyForm;