import React, { Component } from 'react'
//import CardLink from './cardLink.jsx'
import img1 from '../fear.png'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//Need to add the text for the About Me and Contact Me
// The Projects should just lead to another bunch of card sections

class Projects extends Component {
    
    state = {  
        images: [img1, img1, img1]
    }

    render() {
        return (
            <div class='container2'>
                {
                /*
                <div class="scrolldown">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                */
                }
                <a href="https://www.youtube.com/watch?v=ptfUwPJbGlQ&t=285s">
                    <section class = 'card' data-aos='fade-right'>
                        <img src={img1} alt = ''/>
                        <div>
                        <h3>Project 1</h3>
                    </div>
                    </section>
                </a>
                <section class = 'card' data-aos='fade-left'>
                    <img src={img1} alt = ''/>
                    <div>
                        <h3> Project 2</h3>
                    </div>
                </section>
                <section class = 'card' data-aos='fade-right'>
                    <img src={img1} alt = ''/>
                    <div>
                        <h3>Project 3</h3>
                    </div>
                </section>
            </div>
        )
    }
}
 
export default Projects;