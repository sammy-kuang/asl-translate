import logoImage from '../images/logo.png';
import {useNavigate} from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()

    return (
        <div style={{

            marginTop:'50px',
        }}>
            <img src={logoImage}
                width='300px'
                height='auto'
                alt='logo'
                onClick = {() => {navigate("/")}}
            />
            <h1 className='text'>Speak with Your Hands, Learn with Your Heart</h1>
        </div>
    );
}