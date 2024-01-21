import './input-box.styles.css'
import { useState } from 'react'

export default function InputBox() {
    const [word, setWord] = useState("")

    return (
        <div className="side-by-side-items">
            <input type="text" className="input-box" value={word} onChange={(e) => setWord(e.target.value)} placeholder="Type a word to translate" />
        </div>
    )
}
