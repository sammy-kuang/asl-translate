import './HomePage.styles.css'
import {useNavigate} from 'react-router-dom'
import Header from '../components/Header'
import logoImageAlt from '../images/logo-alt.png';
import erniePic from '../images/ernie.png';
import jackPic from '../images/jack.jpg';
import anthonyPic from '../images/anthony.jpg';
import sammyPic from '../images/sammy.jpeg';


export default function HomePage() {
    const navigate = useNavigate()

    return (
        <div className="HomePage">
            <Header/>

                <div className='routes'>
                    <button className="homepage-router-button" onClick={() => {navigate("translate")}}>Begin translating!</button>
                    <button className="homepage-router-button" onClick={() => {navigate("quiz")}}>Test yourself!</button>
                </div>
                <br/>
                <br/>
                <p style={{color:'gray'}}>Special thanks to <a href='https://www.signingsavvy.com/' target='blank'>Signing Savvy</a><br/> for video credits of all the sign language vocabulary.</p>

                {/* <div>
                    <button className='button' onClick={() => {navigate("translate")}}>Translate!</button>
                    <button className='button'> Test me!</button>
                </div> */}

                {/* mission statement section */}
                <div className="mission-statement-container"> 

                    <div className='about-mission-container'>
                        <div className='about-mission-left-col'>
                            <h1 className='about-subtitle'>About Us</h1>
                            <p>
                                Welcome to ASLTranslate, where we believe in breaking down barriers and fostering a world
                                where communication knows no limits. <br/><br/>Our passion for accessibility and education has driven
                                us to create a platform that empowers individuals to learn American Sign Language (ASL) with ease. We are dedicated to providing a bridge between spoken language and sign language.
                            </p>
                        </div>
                        <div className='about-mission-right-col'>
                            <h1 className='about-subtitle'>Our Mission</h1>
                            <p>
                                Of course, anyone can communicate without ASLTranslate by simply pulling out a phone or a piece of paper and communicate text instead,
                                but the aim of ASLTranslate is to foster the learning process of ASL to go beyond communication and generate deeper interpersonal connections. <br/><br/>
                                ASLTranslate's mission is to make learning ASL an enriching and accessible experience for everyone.
                            </p>
                        </div>
                    </div>

                    <h1 className='about-subtitle'>Join Us in Bridging Worlds</h1>
                        <p>
                            ASLTranslate is more than just a tool; it's a community committed to breaking down communication barriers. Whether you're a student, a professional, or someone curious about sign language, we invite you to join us on this journey of learning, understanding, and connection.
                        </p>
                    <h1 className='about-subtitle'>Thank you for choosing ASLTranslate.</h1>
                    <h1>Let's speak with our hands and learn with our hearts!</h1>

                    <img src={logoImageAlt}
                    width='150px'
                    height='auto'
                    alt='logo'
                    onClick = {() => {navigate("/")}}
                    />
                </div>

                {/* team member section */}
                <h1 className='team-member-text'>Meet the project team!</h1>
                <div className='team-member-container'>
                    <div className='team-member'>
                        <a href="https://github.com/sammy-kuang">
                            <h3>Sammy</h3>
                            <img className='team-member-pic' src={sammyPic} alt='Sammy'/>
                        </a>
                    </div>
                    <div className='team-member'>
                        <a href="https://www.linkedin.com/in/j-ackyao/">
                            <h3>Jack</h3>
                            <img className='team-member-pic' src={jackPic} alt='Jack'/>
                        </a>
                    </div>
                    <div className='team-member'>
                        <a href="https://www.linkedin.com/in/anthony-ji-b898a0290/">
                            <h3>Anthony</h3>
                            <img className='team-member-pic' src={anthonyPic} alt='Anthony'/>
                        </a>
                    </div>
                    <div className='team-member'>
                        <a href="https://www.linkedin.com/in/erniehan/">
                            <h3>Ernie</h3>
                            <img className='team-member-pic' src={erniePic} alt='Ernie'/>
                        </a>
                    </div>
            </div>
            
        </div>
    )
}