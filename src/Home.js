import './Home.css'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid } from '@material-ui/core'
import spider from './trace.svg'
import axios from 'axios'
import srija from './assets/srija.jpg'
import Button from '@material-ui/core/Button'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import React, { useState } from 'react'
import clanguage from './assets/c.png'
import python from './assets/python.png'
import java from './assets/java.png'
import linux from './assets/linux.png'
import wireshark from './assets/wireshark.png'
import mysql from './assets/mysql.png'
import catblackbg from './assets/catblackbg.png'
import node from './assets/node.png'
import latex from './assets/latex.png'
import git from './assets/github.png'
import react from './assets/react.png'
const useStyles = makeStyles((theme) => ({
  side1hover: {
    '&:hover': {
      cursor: 'pointer',
      // background: "black",
    },
  },
  side1: {
    background: 'black',
  },

  side2hover: {
    '&:hover': {
      cursor: 'pointer',
      // background: "grey",
    },
  },
  side2: {
    background: 'grey',
  },
  rotateIcon: {
    transform: 'rotate(90deg)',
  },
  skills: {
    paddingBottom: '15px',
    color: 'white',
  },
  skillsdiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: '30px',
  },
}))

const Home = () => {
  const classes = useStyles()
  const [skills, showSkills] = useState(true)
  const [resume, openResu] = useState(false)
  const [joke, setJoke] = useState('')
  const [clicked, setClick] = useState(false)

  function Generatejoke() {
    // console.log(mousePos.x);

    axios
      .get('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'text/plain',
        },
      })
      .then((response) => {
        setJoke(response.data)
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const [catsound, setCatsound] = useState(false)
  // const openResume = () => {};

  return (
    <React.Fragment>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          // width: "100%",
          // justifyContent: "space-between",
          overflow: 'hidden',
        }}
      >
        <div className="HideOnMobile">
          <img
            src={srija}
            alt={'srija missing'}
            style={{ height: '100vh', maxWidth: '100%' }}
          ></img>
        </div>
        <div
          className="intro"
          style={{
            flex: 2,
            marginTop: '100px',
            marginLeft: '10px',
            display: 'flex',
            height: '100vh',
            flexDirection: 'row',
          }}
        >
          <span
            style={{
              paddingLeft: '30px',
              width: '600px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span className="hi">Hi!</span>
            <span
              style={{
                fontSize: '30px',
                color: '#888888',
                // fontWeight: 300,
                marginTop: '20px',
              }}
            >
              I am
              <p
                style={{
                  display: 'inline',
                  fontWeight: 'bold',
                  // color: '#dcdcdc',
                }}
              >
                {' '}
                Srija
              </p>
              , pursuing Masters in Computer Science from University at Buffalo.
            </span>

            <div
              style={{
                paddingTop: '30px',
                width: '400px',
                // paddingBottom: '10px',
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <Button
                    onClick={(e) => {
                      showSkills(!skills)
                    }}
                    startIcon={
                      skills ? (
                        <ChevronRightIcon className={classes.rotateIcon} />
                      ) : (
                        <ChevronRightIcon />
                      )
                    }
                    style={{ color: 'white' }}
                  >
                    Tech Stack
                  </Button>
                  {skills && (
                    <div
                      style={{
                        width: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        paddingTop: '30px',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* <span
                          className={classes.skills}
                          style={{
                            paddingBottom: '15px',
                            color: 'white',
                          }}
                        >
                          Languages
                        </span> */}
                        <div className={classes.skillsdiv}>
                          <img style={{ height: '35px' }} src={clanguage}></img>
                          <img style={{ height: '35px' }} src={python}></img>
                          <img style={{ height: '35px' }} src={java}></img>
                        </div>
                        {/* <span className={classes.skills}>Web Dev</span> */}
                        <div className={classes.skillsdiv}>
                          <img style={{ height: '35px' }} src={linux}></img>
                          <img style={{ height: '35px' }} src={mysql}></img>
                          <img style={{ height: '35px' }} src={node}></img>
                          <img style={{ height: '35px' }} src={react}></img>
                        </div>
                        {/* <span className={classes.skills}>Networking tools</span> */}
                        <div className={classes.skillsdiv}>
                          <img style={{ height: '35px' }} src={wireshark}></img>
                        </div>
                        {/* <span
                          className="skills"
                          style={{
                            paddingBottom: '15px',
                            color: 'white',
                          }}
                        >
                          Other Technologies
                        </span> */}
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            paddingBottom: '15px',
                          }}
                        >
                          <img style={{ height: '25px' }} src={latex}></img>
                          <img style={{ height: '25px' }} src={git}></img>
                        </div>
                      </div>
                    </div>
                  )}
                </Grid>
              </Grid>
            </div>
          </span>
        </div>
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
          }}
        >
          {/* <div className={`spider ${catsound ? 'show' : ''}`}>
            <img
              src={spider}
              alt="message"
              style={{
                width: '200px',
                height: '200px',
                marginTop: '-25px',
                zIndex: '-100',
              }}
            ></img>
          </div> */}
          {/* <Box
            style={{
              width: 'auto',
              height: 'auto',
              // margin: "auto auto 0px",
              // marginRight: 190,
              position: 'fixed',
              right: 190,
              bottom: 3,
            }}
          >
            <div
              style={{
                // overflowX: "hidden",
                // padding: 20,
                // overflowY: "auto",
                display: 'flex',
                // height: '200px',
                flexDirection: 'row',
              }}
            >
              <div className="popup">
                <div className="talk-bubble border tri-right btm-right-in">
                  <div className="talktext">
                    <Button
                      size="small"
                      style={{
                        textTransform: 'none',
                        display: 'block',
                        color: 'white',
                      }}
                      onClick={() => {
                        Generatejoke()
                        setClick(true)
                      }}
                    >
                      wanna hear a joke?
                    </Button>
                    <p style={{ paddingTop: '20px' }}>
                      <span
                        style={{
                          width: '50%',
                          margin: 'auto',
                          overflowX: 'hidden',
                          // paddingTop: "20px",
                        }}
                      >
                        {joke}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="cat"
                style={{
                  objectFit: 'contain',
                  display: 'flex',
                  bottom: -21,
                  position: 'fixed',
                  right: -14,
                }}
              >
                <img
                  src={catblackbg}
                  alt="SVG as an image"
                  style={{
                    // width: '20px',
                    // marginBottom: '0px',
                    marginRight: '12px',
                    height: '150px',
                    // marginLeft: catsound ? "-25px" : " -35px",
                    transition: '100ms',
                  }}
                  onMouseEnter={() => {
                    if (catsound === false) {
                      setCatsound(true)
                    }
                  }}
                  onMouseLeave={() => {
                    setCatsound(undefined)
                  }}
                  onClick={() => {
                    console.log('make cat sounds')
                  }}
                ></img>
              </div>
            </div>
          </Box> */}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
