import './header.css'
import MainContent from '../mainContent'
import { useState } from 'react'

export default function Header () {
  const [products, setProducts] = useState([])
  const [showContent, setShowContent] = useState(false)
  const [showFavorites, setShowFavorites] = useState(false)
  const [favorites, setFavorites] = useState([])

  function handleShowContent () {
    setShowContent(!showContent)
  }

  function handleShowFavorites () {
    setShowFavorites(!showFavorites)
    setShowContent(!showContent)
  }

  return  (
    <>
    <div className="header">
    <button onClick={handleShowContent}>Все котики</button>
    <button onClick={handleShowFavorites}>Любимые котики</button>
    </div>
      {showContent
        ? <MainContent
        products={products}
        setProducts={setProducts}
        favorites={favorites}
        setFavorites={setFavorites}
      />
        : null}

          {showFavorites ? (
            <div className="content-container">
              <div className="content">
                {
                  favorites.map(id => {
                    const product = products.find(item => item.id === id)
                    return (
                      <div className="content-cell" key={id}>
                        <img src={product.thumbnail} alt={product.title}/>
                        <p>{product.title}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          ) : null}
    </>
  )
}
