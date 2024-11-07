

export default function Favorites ({products, favorites}) {
return (
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
)
}
