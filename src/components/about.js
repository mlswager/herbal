import React,{useState,useEffect} from "react";


const About = (props) =>{

    return(
        <div id="about">
            <h2 id="about-title">about herbal</h2>
            <div id="image-container-portrait-small">
                    <img id="about-site-image-small" src="https://avatars.githubusercontent.com/u/17241621?v=4"/>
            </div>
            <div id="about-beginning">
                <div id="image-container-herbs">
                    <img id="about-beginning-image" src="https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/2021-04/herbs.jpg?itok=g_UukhUg"/>
                </div>
                <div id="about-info-container-one">
                    <h3 className="about-info-header">the beginning</h3>
                    <p className="about-info">Hello. My name is Mason Swager and I created herbal. Recently I became interested in the beneficial medicinal uses of various herbs and spices. Around the same time I began my journey to become a full time web developer by graduating from the Full Stack Academy partnered with the University of Illinois Chicago. Naturally, when it came to designing a web-site to showcase what I had learned in my classes I decided to combine my two new interests.</p>
                    <h3 className="about-info-header">the motivation</h3>
                    <p className="about-info">The motivation for herbal came from some of my frustration with matching herbal remedies with corresponding uses. On most of the sites I visited to purchase various herbal remedies and teas from, the process involved a lot of clicking on a product to determine its uses. I wanted to flip that on its head. I already know what I need a remedy for, so I built herbal to be able to easily provide the correct herbal remedies based on a selected use while still making it easy to find the remedy you want if you already know what it is.</p>
                    <p className="about-info">It should be noted that herbal is currently just a display site for my web development skills. I am not a certified herbalist and the information on here was all gained from various informational websites and books.</p>
                </div>
            </div>
            <div id="about-site">
                <div id="about-info-container-two">
                    <h3 className="about-info-header">constructing the site</h3>
                    <p className="about-info">herbal is built in two parts. The back-end is build using a PostGres database with express.js to interface with the front-end, which was built using REACT. The website is deployed on Heroku for public viewing. If you would like to see the code for herbal it can be found on GitHub here.</p>
                    <h3 className="about-info-header">about me</h3>
                    <p className="about-info">As mentioned earlier, my name is Mason Swager. Before attending the Fullstack Academy UIC web development bootcamp I worked as a data analyst for a metrics company. I decided to leave to pursue a career in coding, because I felt that I wanted to learn and expand more than my trajectory was allowing. I graduated from Coe College in 2014 after majoring in Psychology and Art. My current favorite color is red and I have two black cats named Kuzco and Binx.</p>
                </div>
                <div id="image-container-portrait">
                    <img id="about-site-image" src="https://avatars.githubusercontent.com/u/17241621?v=4"/>
                </div>
            </div>
        </div>
    )
}

export default About