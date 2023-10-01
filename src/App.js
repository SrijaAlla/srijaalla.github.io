import './App.css'
import React, { useEffect, useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  withRouter,
  Switch,
} from 'react-router-dom'
import About from './about'
import Home from './Home'
import Header from './Layout'
import Art from './art'
import Contact from './contact'
import Mobile from './mobile'
import Projects from './projects'

const pages = [
  { path: '/', name: 'home', order: 1 },
  { path: '/about', name: 'about', order: 2 },
  { path: '/work', name: 'work', order: 3 },
  { path: '/gallery', name: 'gallery', order: 4 },
  { path: '/contact', name: 'contact', order: 5 },
]
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: this.setPage(this.props.location.pathname),
      curPageOrder: this.setCurrentOrder(this.props.location.pathname),
      newPageOrder: null,
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update')

    let newPage = this.setPage(this.props.location.pathname)
    let newPageOrder = pages.filter(function (page) {
      return page.name === newPage
    })

    let curPage = this.state.currentPage
    let curPageOrder = pages.filter(function (page) {
      return page.name === curPage
    })

    if (newPage !== curPage) {
      console.log('new page')
      let direction =
        curPageOrder[0].order < newPageOrder[0].order ? 'left' : 'right'
      // Set State
      this.setState({
        currentPage: newPage,
        pageDirection: direction,
        curPageOrder: curPageOrder[0].order,
        newPageOrder: newPageOrder[0].order,
      })
    }
  }
  setCurrentOrder = (path) => {
    let curPageOrder = pages.filter(function (page) {
      return page.path === path
    })

    return curPageOrder[0].order
  }

  setPage = (pathname) => {
    // SET PAGE FOR CSS CLASSES
    let page = null
    switch (pathname) {
      case '/':
        page = 'home'
        break
      case '/about':
        page = 'about'
        break
      case '/work':
        page = 'work'
        break
      case '/gallery':
        page = 'gallery'
        break
      case '/contact':
        page = 'contact'
        break
      default:
        page = 'home'
    }

    return page
  }
  render() {
    const { location } = this.props
    const currentKey = location.pathname.split('/')[1] || '/'

    return (
      <>
        {/* <div className="ShowOnMobile">
          <div
            style={{
              height: '100vh',
              width: '100vw',
             backgroundColor: 'black',
            }}
          >
            <Mobile />
          </div>
        </div> */}
        <div
          className={`wrapper ${this.setPage(this.props.location.pathname)}`}
        >
          <Header />
          <div className={`wrap ${currentKey} `}>
            <TransitionGroup
              className={`transition-group ${this.state.pageDirection}`}
            >
              <CSSTransition
                key={currentKey}
                timeout={800}
                in={this.state.mounted}
                classNames={'transition-wrap'}
              >
                <section className={`route-section fade`}>
                  <Switch location={location}>
                    <Route exact path="/" component={() => <Home />} />
                    <Route path="/about" component={() => <About />} />
                    <Route path="/work" component={() => <Projects />} />
                    <Route path="/gallery" component={() => <Art />} />
                    <Route path="/contact" component={() => <Contact />} />
                  </Switch>
                </section>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(App)
