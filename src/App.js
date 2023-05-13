import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Page404 from './components/Page404'
import User from './components/User'
import Contact from './components/Contact'
import Filter from './components/Filter'
import Company from './components/Company'
import Channel from './components/Channel'
import Other from './components/Other'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <h1>
          React Router DOM v6
        </h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Nasted routes */}
          <Route path="/contact/" element={<Contact />} >
            <Route path='company' element={<Company />} />
            <Route path='channel' element={<Channel />} />
            <Route path='other' element={<Other />} />
          </Route>

          {/* Not a valid page */}
          {/* <Route path="/*" element={<Page404 />} /> */}
          <Route path="/*" element={<Navigate to="/" />} />

          {/* Dynamic routing */}
          <Route path="/user/:name" element={<User />} />

          {/* Filter page */}
          <Route path="/filter" element={<Filter />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App