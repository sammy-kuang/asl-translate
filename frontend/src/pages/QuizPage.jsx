import { useState, useEffect } from "react"
import { SERVER_IP, GET } from "../components/Translator"
import Subheader from "../components/Subheader"

export default function QuizPage() {

    const [wordInd, setWordInd] = useState(0)
    const list = ["Hello", "Goodbye", "Thank you", "Sorry"]
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

    function updateUrl() {
        setUrl(SERVER_IP + GET + list[wordInd])
    }

    useEffect(() => {
        setUrl(SERVER_IP + GET + list[wordInd])
        setRevealed(false)
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
                    (<div>
                        {/* Not revealed yet stuff here IG */}
                    </div>)
                }
            </div>

            <p>
                <button onClick={() => {
                    setRevealed(true)
                }}>Reveal</button>
            </p>


            <p>
                <button onClick={() => {
                    setWordInd(getRandomInd(0, list.length, wordInd))
                }}>Refresh</button>
            </p>

        </div >
    )
}