import { useEffect, useState } from 'react'
import './mainContent.css'
import { FaHeart } from 'react-icons/fa';
import { TbHeartFilled } from 'react-icons/tb'


export default function MainContent ({products, setProducts, favorites, setFavorites}) {
  const [count, setCount] = useState(0)

  async function fetchCats () {
    try {
      const resp = await fetch(`https://dummyjson.com/products?limit=15&skip=${count === 0 ? 0 : count * 15}`)
      const res = await resp.json()
      setProducts([...products, ...res.products])
      console.log(res.products)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {fetchCats()}, [count])

  function toggleFavorite (productId) {
    if(favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId))
    } else {
      setFavorites([...favorites, productId])
    }
  }

  return (
    <div className="content-container">
      <div className="content">
        {products.map((item)=> (<div className="content-cell" key={item.id}><img src={item.thumbnail} alt={item.title}/>
        <p>{item.title}</p>
         <span
           className="add-item"
           onClick={()=>toggleFavorite(item.id)}
         >
           {favorites.includes(item.id) ? (
             <TbHeartFilled size={19} color="red"/>
             ) : (
               <FaHeart size={19}/>
           )
           }

         </span>
        </div>))}
      </div>
      <div className="button-container">
        <button onClick={()=> setCount(count + 1)}>Load more data...</button>
      </div>
    </div>
  )
}
