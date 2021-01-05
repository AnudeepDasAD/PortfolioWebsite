import React, { Component } from 'react'
import ParallaxBackground from './components/backgroundParallax'
import CardSection from './components/cardSection'
import Projects from './components/projects'

class MainComponents extends Component {
    render() {
        return(
            <div>
                <div class="parallax">
                    <ParallaxBackground/>
                </div>
                <div>
                    <CardSection/>
                </div>
            </div>
        )
    }
}

export default MainComponents;