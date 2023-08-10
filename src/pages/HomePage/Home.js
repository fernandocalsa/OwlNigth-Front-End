import React from 'react'
import './Home.css'
import LocalCard from '../../components/LocalCard/LocalCard';
// import CarruselBanner from "../../containers/CarruselBanner/CarruselBanner"

const Home = () => {
  return (
    <div className='header'>
        {/* <CarruselBanner />        */}
        <LocalCard />
    </div>
  )
}

export default Home;