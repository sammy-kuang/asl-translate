import { useState } from "react"
import './Translator.styles.css'


export const SERVER_IP = "http://127.0.0.1:5000/"
export const GET = "translate?text="
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
        <div className="translator-parent">
            {/* Input Box */}

            <div className="input-output-container">
                <textarea type="text" className="input-text-area" 
                value={phrase}
                onSubmit={handleClick}
                onChange={(e) => handleTextChange(e)}
                placeholder="Enter text to translate" />

                {/*Video player*/}

                <video className="output-video" type="video/mp4" src={url} controls autoPlay>
                    Your browser does not support the video tag.
                </video>
            </div>

            <button className="translate-button" onClick={handleClick}>Translate</button>
            <p style={{color:'gray'}}>Disclaimer: English grammar does not always directly translate to ASL grammar,<br/> some English vocabulary may not apply</p>
        </div>
    )
}