import React from 'react' 
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollectionns } from '../Components/NewCollections/NewCollectionns'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'
export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollectionns/>
        <NewsLetter/>
    </div>
  )
}

export default Shop
