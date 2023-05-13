import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const age = searchParams.get('age')
    const city = searchParams.get('city')
    const text = searchParams.get('text')

    return (
        <div>
            <h1>Filter page</h1>
            <h3>My Age is '{age}'</h3>
            <h3>My city is '{city}'</h3>
            <h3>My text is '{text}'</h3>

            <input type="text" onChange={(e) => setSearchParams({ text: e.target.value })} placeholder='Set text to query params' />
            <button onClick={() => setSearchParams({ age: 25 })}>Set age to query params </button>
        </div>
    )
}

export default Filter