import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

const Companies = () => {
    return (
        <div className="Companies__container">
            <div className="Companies__banner">
                <div className="Companies__bannerMessage">
                    <h2>Companies</h2>
                    <p>Let's work together!</p>
                </div>
            </div>
            {/* message block */}
            <div className="Companies__infoBlockLeft">
                <div className="Companies__messageBlock">
                    <h2>We want to help you.</h2>
                    <p>We are here for you no matter the size or from where.  THe industrial Liaison Program is here to help you connect with students that want to participate with companies like you.</p>
                    <p>The students and professors are excited to meet companies like you that want to build or work on the making this planet a better place.</p>
                </div>
                <img src="./images/helping.jpeg" alt="Helping"/>
            </div>
            <div className="Companies__infoBlockRight">
                <img src="./images/startups.jpeg" alt="Start Ups"/>
                <div className="Companies__messageBlock">
                    <h2>Start Ups and Small Companies.</h2>
                    <p>Here you will find the best students and faculty members to help you out build the next big thing.</p>
                    <p>We want you to interact with our students and faculty members and be part of our family.</p>
                </div>
            </div>
            {/* message block */}
            <div className="Companies__infoBlockLeft">
                <div className="Companies__messageBlock">
                    <h2>Giving back to UPR.</h2>
                    <p>As we help you with your goals and dreams, help students acheive their goals to by giving back to our students in any way possible.</p>
                    <p>The students and faculty are the next leaders of tomorrow and your help will make them prepare better for what it is to come.</p>
                </div>
                <img src="./images/centro.jpeg" alt="Centro de Estudiantes"/>
            </div>
            <div className="Companies__infoBlock">
                <div className="Companies__message">
                    <h2>Let's talk on how you can help more students and professors.</h2>
                    <p>There are a lot of student organizations that would love your help on their future project.  Be the one who stepped up for them, and Puerto Rico's leaders of tomorrow.</p>
                    <button><Link to='/contact'>Let's Talk</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Companies;