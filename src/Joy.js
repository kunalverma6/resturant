import React from 'react'
import "./Joy.css"
import { FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare, FaLinkedinIn } from 'react-icons/fa';

const Joy = () => {
    return (
        <>
<nav className="main-nav">
    
    <div className="name">
        <h2>
    <span>T</span>ata
    <span>T</span>echnical
    </h2>
    </div>
   
    <div>
        <ul>
            <li>
               <a>home</a> 
            </li>
            <li>
               <a>contact</a> 
            </li>
            <li>
               <a>services</a> 
            </li>
            <li>
               <a>about</a> 
            </li>
        </ul>
    </div>
   
    <div className="logo">
        <ul>
    <li>
               <a href="https://www.instagram.com/"><FaInstagramSquare /></a> 
            </li>
            <li>
               <a href=""><FaLinkedinIn /></a> 
            </li>
            <li>
               <a href="">< FaYoutubeSquare /></a> 
            </li>
            <li>
               <a href=""><FaLinkedinIn></FaLinkedinIn></a> 
            </li>
    </ul>
    </div>
</nav>
 <section>
    <div>
       <h2> this is the page for the web page of the main menue</h2>
       <h1>KUNAL VERMA</h1>
    </div>
 </section>


        </>
    )
}

export default Joy
