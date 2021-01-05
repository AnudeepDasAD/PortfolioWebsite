import React, { Component } from 'react'
//import CardLink from './cardLink.jsx'
import img1 from '../happy.png'
import img2 from '../screenshot.png'
import img3 from '../screenScraperDemo.png'
import img4 from '../revShell.png'
import img5 from '../videoAppOnly.jpg'


//Need to add the text for the About Me and Contact Me
class CardSection extends Component {

    render() {
        return (
            <div class='container'>
                <div class="directText">
                    <h1> About me </h1>
                    <div>
                        I am a third-year student at the University of Waterloo's Honours, Computer Science, Co-operative Program.
                        I enjoy learning about all aspects of computer science, but I have a keen interest in machine learning and 
                        cybersecurity. <br></br>
                        Furthermore, I am interested in fullstack development, and I have experience with the MERN stack in developing a CRUD
                        application (see "Daily-Dones"). <br></br><br></br>

                        Please keep scrolling to see the most significant personal projects that I have worked on. <br></br>
                        And <a href = "https://github.com/AnudeepDasAD?tab=repositories">visit</a> my GitHub for even more.
                    </div>
                </div>
                <a href = "https://github.com/AnudeepDasAD/Expression-Detection">
                    <section class = 'card' data-aos='fade-right'>
                        <img src={img1} alt = ''/>
                        <div>
                            <div>
                            <h4>Emotion Detection</h4>
                            <h4><i>OpenCV, Tensorflow, Matplotlib, Python, NumPy, Flask, Django</i></h4>
                            </div>
                            <div>
                                <br></br>
                                Successfully implemented a program that traversed through the Cohn-Kanade facial expression dataset to assemble training and testing data for the project.
                                <br></br><br></br>
                                Leveraged OpenCV's Haarcascade classifier and LBPH Face Recognizer to develop an ML model that detects a person’s facial expressions.
                            </div>
                        </div>
                    </section>
                </a>
                <a href = "http://daily-dones.herokuapp.com/">
                    <section class = 'card' data-aos='fade-right'>
                        <img src={img2} alt = ''/>
                        <div>
                            <div>
                                <h4>Daily-Dones</h4>
                                <h4><i>MongoDB, Express.js, React.js, Node.js, Redux, oauth2, Heroku</i></h4>
                            </div>
                            <div>
                                <br></br>
                                Implemented the MERN stack to create a CRUD application where users can assemble and adjust a list of tasks to accomplish.
                                <br></br><br></br>
                                New users can register using a provided form or using Google Oauth. (optional login- username: test password: test)
                                <br></br><br></br>
                                See GitHub: <a href="https://github.com/AnudeepDasAD/DailyDones">link</a>
                            </div>
                        </div>
                    </section>
                </a>
                <a href = "https://github.com/AnudeepDasAD/ReverseShell">
                    <section class = 'card' data-aos='fade-right'>
                        {
                            // <video width="100%" height="400" controls><source src={vid1} type="video/mp4"></source></video>
                        }
                        <img src={img4} alt = ''/>
                        <div>
                            <div>
                                <h4>Reverse Shell</h4>
                                <h4><i>Python, Pynput, PyScreenshot, OpenCV, Socket</i></h4>
                            </div>
                            <div>
                                <br></br>
                                Built a reverse shell program which can remotely connect to other computer and view files.
                                <br></br><br></br>
                                Further enhanced by additional keylogging, remote webcam access, and remote screen shot capabilities.
                                <br></br><br></br>
                                <b> Image depicts screenshot and webcam live feed received from a connected machine</b>
                            </div>
                        </div>
                    </section>
                </a>
                <a href = "https://github.com/AnudeepDasAD/ScreenScraper/blob/master/screenScraper.py">
                    <section class = 'card' data-aos='fade-right'>
                        <img src={img3} alt = ''/>
                        <div>
                            <div>
                                <h4>Screen Scraper and Sentiment Analyzer</h4>
                                <h4><i>NLTK, Python, Selenium Chromedriver, YouTube Data API</i></h4>
                            </div>
                            <div>
                                <br></br>
                                Automated system to query for videos on YouTube and use the video ID to aggregate comments.
                                <br></br><br></br>
                                Utilized TextBlob and VaderSentiment to effectively determine the subjectivity and polarity metrics of the comments.
                                <br></br><br></br>
                                <b> Image depicts a sampling of 200 comments from 2 videos, and the average polarity scores for those comments
                                    according to two different sentiment analysis libraries.
                                </b>
                            </div>
                        </div>
                    </section>
                </a>
                <a href = "https://github.com/AnudeepDasAD/VideoApp">
                    <section class = 'card' data-aos='fade-right'>
                        <img src={img5} alt = ''/>
                        <div>
                            <div>
                                <h4>Camera App</h4>
                                <h4><i>Kotlin, AWS S3</i></h4>
                            </div>
                            <div>
                                <br></br>
                                Leveraged the built-in camera app to record a video and save it to the device.
                                <br></br><br></br>
                                Uploaded video to AWS S3 bucket.
                            </div>
                        </div>
                    </section>
                </a>
            </div>
        )
    }
}
 
export default CardSection;