import { useState } from "react"
import './Translator.styles.css'
import VIDEO from '../0.mp4'

export default function Translator() {
    const [phrase, setPhrase] = useState("");
    const [url, setUrl] = useState("");

    return (
        <div className="side-by-side">
            {/* {Input Box} */}
            <div className="side-by-side-items">
                <input type="text" className="input-box" value={phrase} onChange={(e) => setPhrase(e.target.value)} placeholder="Enter text to translate" />
                <button onClick={(e) => {
                    setUrl("http://127.0.0.1:5000/translate?text="+phrase)
                }}>Translate</button>
            </div>

            {/*Video player*/}
            <div className="side-by-side-items">
                <video type="video/mp4" src={url} controls>
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>
    )
}