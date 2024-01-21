import { useState, useEffect } from "react"
import { SERVER_IP, GET } from "../components/Translator"
import Subheader from "../components/Subheader"
import "./QuizPage.styles.css"

export default function QuizPage() {

    const [wordInd, setWordInd] = useState(0)
    // can possible replace with some API call to retrieve commonly used words
    const list = ["Hello", "Goodbye", "Thank you", "Sorry", "Oops", "Help", "Wow"]
    const [url, setUrl] = useState(SERVER_IP + GET + list[wordInd])
    const [revealed, setRevealed] = useState(false)

    function getRandomInd(start, end, exclude) {
        start = Math.ceil(start);
        end = Math.floor(end)
        let rand = Math.floor(Math.random() * (end - start)) + start;
        if (rand === exclude) {
            return getRandomInd(start, end, exclude)
        }
        return rand
    }

    useEffect(() => {
        setUrl(SERVER_IP + GET + list[wordInd])
        setRevealed(false)
    // eslint-disable-next-line
    }, [wordInd]);

    return (
        <div>
            <Subheader />
            <p>How do you sign "{list[wordInd]}" ?</p>
            <div>
                {revealed ? (
                    <video className="output-video" type="video/mp4" src={url} controls autoPlay>
                        Your browser does not support the video tag.
                    </video>) :
                    <></>
                }
            </div>

            <p>
                {!revealed ? (
                <button className="reveal-button" onClick={() => {
                    setRevealed(true)
                }}>Reveal</button>
                ) : <></>}
            </p>


            <p>
                <button className="next-button" onClick={() => {
                    setWordInd(getRandomInd(0, list.length, wordInd))
                }}>Next</button>
            </p>

        </div >
    )
}