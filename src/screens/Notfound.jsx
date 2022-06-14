
import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
    return (
        <div id="wrapper">
            <img width={700} height={400} src="https://i.imgur.com/qIufhof.png" />
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
        </div >
    )
}

export default Notfound