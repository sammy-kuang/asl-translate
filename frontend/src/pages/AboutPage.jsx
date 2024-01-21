import './AboutPage.styles.css'
import {useNavigate} from 'react-router-dom'

export default function AboutPage() {
    const navigate = useNavigate()

    return (
        <div className="AboutPage">
            <p>
                Hello world!
            </p>

            <div>
                <button onClick={() => {navigate("translate")}}>Translate!</button>
                <button>Test me!</button>
            </div>

        </div>
    )
}