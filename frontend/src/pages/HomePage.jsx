import './HomePage.styles.css'
import {useNavigate} from 'react-router-dom'
import Header from '../components/Header'

export default function HomePage() {
    const navigate = useNavigate()

    return (
        <div className="HomePage">
        <Header/>

            <div>
                <button className="homepage-translate-button" onClick={() => {navigate("translate")}}>Begin translating!</button>
            </div>

        </div>
    )
}