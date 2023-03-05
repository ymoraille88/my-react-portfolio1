import React from 'react';
import Picture from '../assets/images/MDT.png';
import './about.css';



export default function About() {
    return (
<div class='about'>
    <h2> About Me</h2>
    <img className='Picture' src={Picture}></img>
    <hr />
    <li class='intro'>
First and foremost I am a devoted father who is looking to thrive in every aspect of life. I am currently changing career from being a Truck Driver into A Full Stack Software Engineer.  I did a Full Time bootcamp at UNCC.
At UNCC I was able to learn diffenrent technologies in Coding.  For example: Vanilla JavaScript, Node.Js, React.js, Express.js.  I am always ready to learn new technologies when it comes to Coding. I am a fast learner and a Team player.
    </li>
</div>
    );
}