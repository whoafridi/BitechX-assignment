import React from 'react'
import Blog from '../Blog/Blog'
import Navigation from '../Navigation/Navigation'

export const Home = () => {
  return (
    <div className='container'>
        <Navigation/>
        <Blog/>
    </div>
  )
}
