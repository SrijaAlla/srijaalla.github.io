import { makeStyles, StylesProvider } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { Box, Divider, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import image1 from './assets/1.jpg'
import image2 from './assets/2.jpg'

import tinker from './assets/tinker.gif'
import image5 from './assets/5.jpg'
import image6 from './assets/6.jpg'
import image9 from './assets/9.jpg'
import image7 from './assets/7.jpg'
import image8 from './assets/8.jpg'

import om from './assets/om.png'
import games2 from './assets/17mcme18_project.png'
import pathfinder from './assets/pathfinder.png'
import check from './assets/check.png'
import ugate from './assets/ugate.jpg'
import traffic from './assets/traffic.webp'
const useStyles = makeStyles((theme) => ({
  rotateIcon: {
    transform: 'rotate(90deg)',
  },
}))

const About = () => {
  const navigate = useHistory()
  let pixel = 0

  const [mousePos, setMousePos] = useState({})
  const classes = useStyles()
  const [skills, showSkills] = useState(false)
  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)
  const handleArt = () => {
    navigate.push('/gallery')
  }
  const handleProjects = () => {
    navigate.push('/work')
  }
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  if (parseInt(mousePos.x) <= 1062) {
    pixel = 1065 - parseInt(mousePos.x)
  } else {
    pixel = parseInt(mousePos.x) - 763
  }
  const styles = {
    width: hover1 ? `calc(70% + ${pixel}px)` : '70%',
    background: '#EFEFEF',
    overflowX: 'hidden',
    left: 0,
    position: 'absolute',
    zIndex: hover2 ? 3 : 1,
    maxWidth: '100%',
    transition: '1000ms',
    borderRadius: '0px 10px 10px 0px',
  }
  const styles1 = {
    width: hover2 ? `calc(70% + ${pixel}px)` : '70%',
    background: '#EFEFEF',
    overflowX: 'hidden',
    right: 0,
    position: 'absolute',
    zIndex: hover2 ? 3 : 1,
    maxWidth: '100%',
    transition: '1000ms',
    borderRadius: '10px 0px 0px 10px',
  }
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: 'black',
          overflowX: 'hidden',
          height: '100vh',
        }}
      >
        <div
          style={{
            height: '40%',
            overflow: 'hidden',
            marginTop: '80px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <span>
            <img
              src={tinker}
              style={{ height: '100%', maxHeight: '200px' }}
            ></img>
          </span>
          <span
            style={{
              color: '#888',
              fontSize: '1.2rem',
              textAlign: 'left',
              width: '60%',
            }}
          >
            {/* <p> Let me introduce myself</p> */}A Computer Science enthusiast
            on a journey of continuous learning and innovation. Currently
            pursuing a Masters in Computer Science at the University at Buffalo,
            I'm passionate about software development, machine learning, and
            making a positive impact through technology. With hands-on
            experience as a Software Engineer, and a track record of driving
            growth and efficiency in various roles, I'm dedicated to creating
            user-friendly solutions and pushing the boundaries of what's
            possible. When I'm not working you'll find me binge watching or
            painting.
            <a
              href="https://www.linkedin.com/in/srijaalla/overlay/1635538372073/single-media-viewer/?profileId=ACoAADCnxyUBmffjTWWf-KUanr3bapEC_aOMepk"
              target="blank"
              style={{
                display: 'block',
                cursor: 'pointer',
                textDecoration: 'underline',
                color: 'white',
                marginTop: '40px',
              }}
            >
              More about me on my Resume....
            </a>
          </span>
        </div>
        {/* <div style={{ height: '60%' }}> */}
        <div
          className="firstbox"
          onMouseEnter={() => {
            setHover1(true)
            // setProjects(true);
            // setArts(false);
          }}
          onMouseLeave={() => {
            setHover1(false)
            // setProjects(false);
          }}
          onClick={() => {
            handleProjects()
          }}
          style={{
            width: '100%',
            height: '150px',
            // background: "white",
            display: 'flex',
            flexDirection: 'row-reverse',
            overflow: 'hidden',
          }}
        >
          <div className="heading" style={styles}>
            <div
              style={{
                display: 'flex',
                float: 'right',
                padding: '20px',
                // width: "200px",
                // height: "200px",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: 200,
                  height: 110,
                  marginRight: 10,
                  opacity: 0.6,
                  // backgroundColor: "black",
                  objectFit: 'cover',
                }}
                src={om}
              />
              <Box
                component="img"
                sx={{
                  width: 200,
                  height: 110,
                  marginRight: 10,
                  // backgroundColor: "black",
                  objectFit: 'cover',
                  opacity: 0.6,
                }}
                src={ugate}
              />
              <Box
                component="img"
                sx={{
                  width: 200,
                  height: 110,
                  marginRight: 10,
                  // backgroundColor: "black",
                  objectFit: 'cover',
                  opacity: 0.6,
                }}
                src={traffic}
              />
              <Box
                component="img"
                sx={{
                  width: 200,
                  height: 110,
                  marginRight: 10,
                  objectFit: 'cover',
                  opacity: 0.6,
                }}
                src={check}
              />

              <Box
                component="img"
                sx={{
                  width: 200,
                  height: 110,
                  marginRight: 10,
                  objectFit: 'cover',
                  opacity: 0.6,
                }}
                src={pathfinder}
              />
              <Box
                component="img"
                sx={{
                  width: 200,
                  height: 110,
                  marginRight: 10,
                  // backgroundColor: "black",
                  objectFit: 'cover',
                  opacity: 0.6,
                }}
                src={games2}
              />
            </div>
          </div>
          <div style={{ color: 'black', width: '20%' }}>
            <span
              style={{
                fontSize: '3.6rem',
                color: '#888888',
                textTransform: 'uppercase',
              }}
            >
              Projects
            </span>
          </div>
        </div>
        <div
          className="secondbox"
          onMouseEnter={() => {
            setHover2(true)
          }}
          onMouseLeave={() => {
            setHover2(false)
          }}
          onClick={() => {
            handleArt()
          }}
          style={{
            width: '100%',
            height: '150px',
            display: 'flex',
            flexDirection: 'row',
            marginTop: '10px',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontSize: '3.6rem',
              color: '#888888',
              textTransform: 'uppercase',
              margin: 'auto',
            }}
          >
            Art
          </span>
          <div
            style={{
              width: '80%',
              color: 'black',
              margin: 'auto',
              height: '-webkit-fill-available',
            }}
          >
            <div style={styles1}>
              <div
                style={{
                  display: 'flex',
                  padding: '20px',
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: 200,
                    height: 110,
                    marginRight: 10,
                    opacity: 0.6,
                    objectFit: 'cover',
                    '&:hover': {
                      backgroundColor: 'orange',
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  src={image5}
                />
                <Box
                  component="img"
                  sx={{
                    width: 200,
                    height: 110,
                    marginRight: 10,
                    opacity: 0.6,
                    objectFit: 'cover',
                  }}
                  src={image6}
                />
                <Box
                  component="img"
                  sx={{
                    width: 200,
                    height: 110,
                    marginRight: 10,
                    opacity: 0.6,
                    objectFit: 'cover',
                  }}
                  src={image7}
                />
                <Box
                  component="img"
                  sx={{
                    width: 200,
                    height: 110,
                    marginRight: 10,
                    opacity: 0.6,

                    objectFit: 'cover',
                  }}
                  src={image8}
                />
                <Box
                  component="img"
                  sx={{
                    width: 200,
                    height: 110,
                    marginRight: 10,
                    opacity: 0.6,

                    objectFit: 'cover',
                  }}
                  src={image1}
                />
                <Box
                  component="img"
                  sx={{
                    width: 200,
                    height: 110,
                    marginRight: 10,
                    objectFit: 'cover',
                    opacity: 0.6,
                  }}
                  src={image2}
                />
                <Box
                  component="img"
                  sx={{
                    width: 200,
                    height: 110,
                    marginRight: 10,
                    opacity: 0.6,

                    // backgroundColor: "black",
                    objectFit: 'cover',
                    '&:hover': {
                      backgroundColor: 'orange',
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  src={image9}
                />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </React.Fragment>
  )
}

export default About
