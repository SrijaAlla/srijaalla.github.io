import { Outlet, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import './Home.css'
import sa from './sa.svg'

const useStyles = makeStyles((theme) => ({
  options: {
    marginLeft: '40px',
    color: 'white',
  },
}))

const Header = (props) => {
  return (
    <header id="header">
      <div className="container">
        <div className="content">
          <div
            style={{
              backgroundColor: 'black',
              width: '100%',
            }}
          >
            <div
              style={{
                lineHeight: '70px',
                display: 'flex',
                // height: '70px',
                padding: '0 150px 0 150px',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  className="menu-items"
                  style={{
                    width: '100px',
                    textAlign: 'center',
                    display: 'flex',
                    justifySelf: 'flex-start',
                  }}
                >
                  <NavLink
                    to="/"
                    style={{
                      display: 'block',
                      height: '100%',
                      color: 'white',
                      textDecoration: 'none',
                    }}
                    activeclassname="active"
                  >
                    <img
                      src={sa}
                      alt="logo"
                      style={{ width: 40, height: 40, marginBottom: -10 }}
                    ></img>
                  </NavLink>
                </span>
              </div>
              <div>
                <span
                  className="menu-items hover-underline-animation"
                  style={{ width: '100px', textAlign: 'center' }}
                >
                  <NavLink
                    to="/about"
                    activeclassname="active"
                    style={{
                      display: 'block',
                      height: '100%',
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    About
                  </NavLink>
                </span>

                <span
                  className="menu-items hover-underline-animation"
                  style={{ width: '100px', textAlign: 'center' }}
                >
                  <NavLink
                    to="/work"
                    activeclassname="active"
                    style={{
                      display: 'block',
                      height: '100%',
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    Work
                  </NavLink>
                </span>
                <span
                  className="menu-items hover-underline-animation"
                  style={{ width: '100px', textAlign: 'center' }}
                >
                  <NavLink
                    to="/gallery"
                    activeclassname="active"
                    style={{
                      display: 'block',
                      height: '100%',
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    gallery
                  </NavLink>
                </span>
                <span
                  className="menu-items hover-underline-animation"
                  style={{ width: '100px', textAlign: 'center' }}
                >
                  <NavLink
                    activeclassname="active"
                    to="/contact"
                    style={{
                      display: 'block',
                      height: '100%',
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    contact
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
