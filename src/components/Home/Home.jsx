import React from 'react'
import Main from '../Main/Main'
import About from '../About/About'
import Experts from '../Experts/Experts'
import Approach from '../Approach/Approach'
// import Strategy from '../Strategy/Strategy'
import Deliver from '../Deliver/Deliver'

const Home = () => {
  return (
    <div>
        <Main/>
        <About/>
        <Experts/>
        <Approach/>
        {/* <Strategy/> */}
        <Deliver/>
      
    </div>
  )
}

export default Home
