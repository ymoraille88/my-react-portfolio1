import React from 'react';
import Picture from '../assets/images/IMG_0713.tiff'



export default function About() {
    return (
<div>
    <h2> About Me</h2>
    <img className='Picture' src={Picture}></img>
    <li>
First and foremost I am a devoted father who is looking to thrive in any aspect of life. I am currently making a career change from being a Truck Driver into A Full Stack Software Engineer.  I did a Full Time bootcamp at UNCC.
At UNCC I was able to learn diffenrent technologies in Coding.  For example: Vanilla JavaScript, Node.Js, React.js, Express.js.  I am always ready to learn new technologies when it comes to Coding. I am a fast learner and a Team player.
    </li>
</div>
    );
}