import './input-box.styles.css'
import { useState } from 'react'
import VIDEO from '../0.mp4'

export default function VideoPlayer() {
    const [word, setWord] = useState("")

    return (
        <div className="side-by-side-items">
            <video className='video' type="video/mp4" src={VIDEO} controls>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
