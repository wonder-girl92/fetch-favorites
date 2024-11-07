import './header.css'
import { Link } from 'react-router-dom'

export default function Header () {

  // const [showContent, setShowContent] = useState(false)
  // const [showFavorites, setShowFavorites] = useState(false)

  // function handleShowContent () {
  //   setShowContent(!showContent)
  // }
  //
  // function handleShowFavorites () {
  //   setShowFavorites(!showFavorites)
  //   setShowContent(!showContent)
  // }

  return  (
    <>
      <div className="header">
        <Link to="/" className="active">
          Все продукты
        </Link>
        <Link to="/favorites" className="active">
          Избранные продукты
        </Link>
      </div>
    </>
  )
}
