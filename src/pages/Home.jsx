import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItem from '../components/FoodItem'
import Cart from '../components/Cart'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
     <Navbar />
     <CategoryMenu />
     <FoodItem />
     <Cart />
     <Footer />
    </div>
  )
}

export default Home
