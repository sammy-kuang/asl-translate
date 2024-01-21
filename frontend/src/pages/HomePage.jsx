import './HomePage.styles.css'
import {useNavigate} from 'react-router-dom'
import Header from '../components/Header'
import logoImage from '../images/logo.png';
import erniePic from '../images/ernie.png';
import jackPic from '../images/jack.jpg';
import anthonyPic from '../images/anthony.jpg';
import sammyPic from '../images/sammy.jpeg';


export default function HomePage() {
    const navigate = useNavigate()

    return (
        <div className="HomePage">
            <Header/>

                <div>
                    <button className="homepage-translate-button" onClick={() => {navigate("translate")}}>Begin translating!</button>
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
                        <div>
                            <h1 className='mission-statement'>About Us</h1>
                            <p>
                                Welcome to ASLTranslate, where we believe in breaking down barriers and fostering a world <br/>
                                where communication knows no limits. Our passion for accessibility and education has driven <br/>
                                us to create a platform that empowers individuals to learn American Sign Language (ASL) with ease.
                            </p>
                        </div>
                        <div>
                            <h1 className='mission-statement'>Our Mission</h1>
                            <p>
                                Of course, anyone can communicate without ASLTranslate by simplying pulling out a phone or a piece of paper and write down the words instead,
                                but the aim of ASLTranslate is to foster the learning process of ASL to go beyond communication and generate deeper interpersonal connections. <br/><br/>
                                ASLTranslate's mission is to make learning ASL an enriching and accessible experience for everyone. We are dedicated to providing a bridge between spoken language and sign language, fostering inclusivity, understanding, and connection.
                            </p>
                        </div>
                    </div>

                    <h1 className='mission-statement'>Why ASLTranslate?</h1>    
                        <p>
                        Educational Excellence: Our team comprises experts in linguistics, sign language, and education. We strive to deliver accurate and reliable translations while providing valuable resources for learners at every stage.
                        </p> 
                        <p>
                        Empowering Communication: We believe in the power of communication and aim to empower individuals to express themselves freely, regardless of their preferred mode of communication.
                        </p>
                        <p>
                        Inclusivity Matters: ASLTranslate is committed to inclusivity. Our platform is designed to cater to diverse learning styles, ensuring that everyone, from beginners to advanced learners, can find value in our resources.
                        </p>
                    <h1 className='mission-statement'>How We Work</h1>
                        <p>
                        Passion for Learning: We are lifelong learners ourselves, and our passion for continuous improvement is reflected in the features and content we provide.

                        User-Centric Approach: ASLTranslate is designed with you in mind. We constantly gather user feedback to enhance our platform, making it more intuitive and effective for learners of all backgrounds.
                        </p>
                    <h1 className='mission-statement'>Join Us in Bridging Worlds</h1>
                        <p>
                        ASLTranslate is more than just a tool; it's a community committed to breaking down communication barriers. Whether you're a student, a professional, or someone curious about sign language, we invite you to join us on this journey of learning, understanding, and connection.
                        </p>
                    <h1 className='mission-statement'>Thank you for choosing ASLTranslate.</h1>
                    <h1>Let's speak with our hands and learn with our hearts!</h1>
                </div>

                {/* team member section */}
                <h1 className='team-member-text'>Team member</h1>
                <div className='team-member-container'>
                    <div className='team-member'>
                        <h3>Sammy</h3>
                        <img className='team-member-pic' src={sammyPic} alt='Photo of Sammy'/>
                    </div>
                    <div className='team-member'>
                        <a href="https://www.linkedin.com/in/j-ackyao/" target="_blank">
                        <h3>Jack</h3>
                        <img className='team-member-pic' src={jackPic} alt='Photo of Jack'/>
                        </a>
                    </div>
                    <div className='team-member'>
                        <a href="https://www.linkedin.com/in/anthony-ji-b898a0290/" target="_blank">
                        <h3>Anthony</h3>
                        <img className='team-member-pic' src={anthonyPic} alt='Photo of Anthony'/>
                        </a>
                    </div>
                    <div className='team-member'>
                        <a href="https://www.linkedin.com/in/erniehan/" target="_blank">
                        <h3>Ernie</h3>
                        <img className='team-member-pic' src={erniePic} alt='Photo of Ernie'/>
                        </a>
                    </div>
            </div>
            
        </div>
    )
}