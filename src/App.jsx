import './App.css'
import Header from './header'
import MainContent from './mainContent'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Favorites from './favorites'

function App () {
  const [products, setProducts] = useState([])
  const [favorites, setFavorites] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const storedFaves = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log(storedFaves)
    setFavorites(storedFaves)
    fetchProducts()}, [count])

  async function fetchProducts () {
    try {
      const resp = await fetch(`https://dummyjson.com/products?limit=15&skip=${count === 0 ? 0 : count * 15}`)
      const res = await resp.json()
      setProducts([...products, ...res.products])
      console.log(res.products)
    } catch (err) {
      console.log(err)
    }
  }

  function toggleFavorite (productId) {
    if(favorites.includes(productId)) {
      const newFavorites = favorites.filter((id) => id !== productId)
      setFavorites(newFavorites)
      localStorage.setItem('favorite', JSON.stringify(newFavorites))
    } else {
      const newFavorites = [...favorites, productId]
        setFavorites(newFavorites)
      console.log(favorites)
      localStorage.setItem('favorite', JSON.stringify(newFavorites))
    }
  }

  console.log(favorites)

  return (
    <BrowserRouter>
      <Header/>
<Routes>
        <Route path="/"
         element={
          <MainContent
            products={products}
            count={count}
            setCount={setCount}
            favorites={favorites}
            toggleFavorite={toggleFavorite}/>
        }
        />
        <Route path="/favorites"
         element={
          <Favorites
          products={products}
          favorites={favorites}/>
        }
        />
    </Routes>
    </BrowserRouter>
  )
}

export default App
