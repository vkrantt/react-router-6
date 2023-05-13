import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams();
    return (
        <div>
            <h1>{params.name}'s Page</h1>
        </div>
    )
}

export default User