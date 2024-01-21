import './HomePage.styles.css'
import {useNavigate} from 'react-router-dom'
import Header from '../components/Header'
import logoImage from '../images/logo.png';
import erniePic from '../images/ernie.png';


export default function HomePage() {
    const navigate = useNavigate()

    return (
        <div className="HomePage">
            <Header/>

            <div>
                    <button className="homepage-translate-button" onClick={() => {navigate("translate")}}>Begin translating!</button>

                </div>

                {/* <div>
                    <button className='button' onClick={() => {navigate("translate")}}>Translate!</button>
                    <button className='button'> Test me!</button>
                </div> */}
                <div className="mission-statement-container"> 
                    <h2 className='mission-statement'>About Us</h2>
                    <p className='mission-statement-paragraph'>
                    Welcome to ASLTranslate, where we believe in breaking down barriers and fostering a world {'\n'}
                    where communication knows no limits. Our passion for accessibility and education has driven {'\n'}
                    us to create a platform that empowers individuals to learn American Sign Language (ASL) with ease.{'\n'}
                    </p>
                </div>
                <h2 className='team-member-text'>Team member</h2>
                <div className='team-member-container'>
                    <div className='team-member'>
                        <h3>Sammy</h3>
                        {/* <img className='team-member-image' src={sammyPic} alt='Photo of Sammy'/> */}
                    </div>
                    <div className='team-member'>
                        <h3>Jack</h3>
                        {/* <img className='team-member-image' src={jackyPic} alt='Photo of Jacky'/> */}
                    </div>
                    <div className='team-member'>
                        <h3>Anthony</h3>
                        {/* <img className='team-member-image' src={erniePic} alt='Photo of Ernie'/>
        */}             </div>
                    <div className='team-member'>
                        <h3>Ernie</h3>
                        <img className='team-member-image' src={erniePic} alt='Photo of Ernie'/>
                    </div>
            </div>
        </div>
    )
}