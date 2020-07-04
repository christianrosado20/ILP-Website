import React from 'react';
import './style.scss';

import { Container, Jumbotron } from 'react-bootstrap';

const Student = () => {
    return (
        <div className="Students__container">
            <div className="Students__banner">
                <div className="Students__bannerMessage">
                    <h2>Students</h2>
                    <p>The professionals of tomorrow.</p>
                </div>
            </div>
            {/* message block */}
            <div className="Companies__infoBlockLeft">
                <div className="Companies__messageBlock">
                    <h2>Award winning</h2>
                    <p>During each semester, the students are able to join teams to compete in international competitions. Alongside the mentorship of their professors, they work hard developing new solutions and technologies. Their efforts result in advancement within various STEAM fields, manifesting the knowledge they acquire at our institution. Despite being located on a small island, the University of Puerto Rico at Mayagüez has global impact.</p>
                    
                </div>
                <img src="./images/rover.jpg" alt="Helping"/>
            </div>
            <div className="Companies__infoBlockRight">
                <img src="./images/students1.jpg" alt="Start Ups"/>
                <div className="Companies__messageBlock">
                    <h3>Are you a student? <br></br> Create your profile now!</h3>
                    <ul>
                        <li>Enter your name and university email address.</li>
                        <li>Upload a “fun” picture of yourself.</li>
                        <li>Enter a quote or a sentence that communicates your personality.</li>
                        <li>Enter 1-5 sentences that describe the type of collaboration you would like to have with industry. If you have a specific request of an industry partner for our project idea, please make it.</li>
                        <li> Keep your inputs short and to the point! This will encourage companies wanting to collaborate to read what you write.</li>
                    </ul>
                </div>
            </div>
            {/* message block */}
            <div className="Companies__infoBlockLeft">
                <div className="Companies__messageBlock">
                    <h2>Science buddies</h2>
                    <p>The researchers at the University of Puerto Rico are funded by government organizations such as the National Science Foundation (NSF) and private companies who have an interest in collaborating on specific programs. The extent of the topics varies from Bioinformatics, Data Science, Natural Language Processing to Cancer detection, the impact of natural catastrophes and on and on.</p>
                    <p>Our students also contribute their time and knowledge developing new solutions to complex problems the research presents. In addition, the professors lead and motivate students to publish papers and present their work in international and recognized conferences.</p>
                </div>
                <img src="./images/research.jpeg" alt="Centro de Estudiantes"/>
            </div>
            <div className="Companies__infoBlockLeft">
            <img src="./images/students2.jpg" alt="Centro de Estudiantes"/>

                <div className="Companies__messageBlock">
                    <h2>Innovators</h2>
                    <p>Our students are appreciated for their open minded approaches and commitment to innovate. Their resilience often leads to different problem solving perspectives. This can be seen in international competitions where their solutions stand out against other recognized institutions from all over the world. Private and public entities come throughout the year to meet and engage with our students. Often these visits lead to creative engagements and ideas that the company visitors take back home with them.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Student;