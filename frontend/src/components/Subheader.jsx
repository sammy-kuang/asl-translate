import logoImage from '../images/logo-alt.png';
import {useNavigate} from 'react-router-dom'
import './Subheader.styles.css'


export default function Subheader() {
    const navigate = useNavigate()

    return (
        <div className="subheader-parent">
            <img className="subheader-logo" src={logoImage} 
                onClick = {() => {navigate("/")}}
                alt='logo-alt'/>
            <p className="subheader-text">ASLTRANSLATE</p>
        </div>
    );
}