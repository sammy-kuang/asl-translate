import './HomePage.styles.css'
import {useNavigate} from 'react-router-dom'

export default function HomePage() {
    const navigate = useNavigate()

    return (
        <div className="HomePage">
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