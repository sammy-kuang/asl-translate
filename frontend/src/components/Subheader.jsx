import logoImage from '../images/logo-alt.png';
import {useNavigate} from 'react-router-dom'

export default function Subheader() {
    const navigate = useNavigate()

    return (
        <div style ={{
                width: 'auto',
                display: 'flex',
                paddingLeft: '100px',
                marginTop: '50px',
                marginBottom: '70px',
                alignItems: 'center',
                gap: '30px'
            }}>
            <img src={logoImage}
                width='auto'
                height='120px'
                alt='logo'
                onClick = {() => {navigate("/")}}
                style={{cursor: 'pointer'}}
            />
            <p style = {{
                color: 'white',
                fontSize: '50px',
                verticalAlign: 'middle',
                margin: '0',
                padding: '0',

            }}>ASL TRANSLATE</p>
        </div>
    );
}