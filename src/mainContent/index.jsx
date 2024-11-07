
import './mainContent.css'
import { FaHeart } from 'react-icons/fa';
import { TbHeartFilled } from 'react-icons/tb'


export default function MainContent ({products, count, setCount, favorites, toggleFavorite}) {
  console.log(favorites)
  return (
    <div className="content-container">
      <div className="content">
        {products.map((item)=> (
          <div className="content-cell"
            key={item.id}>
            <img src={item.thumbnail} alt={item.title}/>
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
