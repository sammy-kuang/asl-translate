import { useState } from "react"
import './Translator.styles.css'


const SERVER_IP = "http://127.0.0.1:5000/"
const GET = "translate?text="
const DEFAULT = SERVER_IP + GET + "hello"

export default function Translator() {
    const [phrase, setPhrase] = useState("");
    const [url, setUrl] = useState(DEFAULT);

    const handleClick = () => {
        if (phrase === "")
            return
        setUrl(SERVER_IP + GET + phrase)
    };

    const handleTextChange = (e) => {
        setPhrase(e.target.value)
    };

    return (
        <div className="side-by-side">
            {/* Input Box */}
            <div className="side-by-side-box">
                <input type="text" className="input-box" 
                value={phrase}
                onSubmit={handleClick}
                onChange={(e) => handleTextChange(e)}
                placeholder="Enter text to translate" />
            </div>

            <button className="translate-button" onClick={handleClick}>Translate</button>

            {/*Video player*/}
            <div className="side-by-side-box">
                <video type="video/mp4" src={url} controls autoPlay>
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>
    )
}