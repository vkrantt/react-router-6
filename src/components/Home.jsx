import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Home page</h1>
            <button onClick={() => navigate('/about')}>Use button to navigate</button>
        </div>
    )
}

export default Home