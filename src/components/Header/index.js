import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
        className="website-logo-img"
      />
    </Link>
  </nav>
)

export default withRouter(Header)
