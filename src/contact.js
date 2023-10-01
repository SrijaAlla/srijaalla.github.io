import { Grid, IconButton } from '@material-ui/core'
import React from 'react'
import { useEffect, useState } from 'react'

import EmailIcon from '@mui/icons-material/Email'
import { styled } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import './Home.css'
import contact from './assets/contact.gif'

import robo from './assets/robo.gif'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({}))

const Contact = () => {
  const classes = useStyles()
  let pixel = 0

  const [mousePos, setMousePos] = useState({})
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  function handleClick(contactstr) {
    if (contactstr == 'email') {
      window.open('https://www.netflix.com/browse')
    }
  }

  // if (parseInt(mousePos.x) <= 1062) {
  //   pixel = 1065 - parseInt(mousePos.x)
  // } else {
  //   pixel = parseInt(mousePos.x) - 763
  // }
  const styles3 = {
    // ma: `calc(${pixel}px)`,
    // height: '70px',
    // width: '70px',
    marginLeft: `calc(${mousePos.x}px)`,
    // width: `calc(${mousePos.x}px)`,
    // backgroundColor: 'white',
    // color: 'white',
    transition: '50ms',
    bottom: 0,

    position: 'absolute',
  }
  return (
    <React.Fragment>
      <>
        <div
          style={{
            display: 'flex',
            height: '100vh',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '50%',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '30px',
                // alignItems: 'center',
                // width: '90%',
                // padding: '0px 10px',
                color: 'white',
                // fontWeight: "lighter",
              }}
            >
              <div>Get in touch via social media or email</div>
            </div>
            <div
              style={{
                display: 'grid',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  flexDirection: 'column',
                  display: 'flex',
                  justifySelf: '',
                }}
              >
                <Grid container spacing={6} style={{ paddingTop: '20px' }}>
                  <Grid item xs={6} style={{ width: '50%' }}>
                    <a
                      href="mailto:srijaalla10@gmail.com"
                      target="blank"
                      style={{ textDecoration: 'none' }}
                    >
                      <div
                        className="icon-contact email"
                        // onClick={handleClick('email')}
                      >
                        {/* <EmailIcon style={{ width: "60px", height: "60px" }} /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="60px"
                          height="60px"
                        >
                          <rect fill="#fff" rx="15%"></rect>
                          <path
                            fill="#4285f4"
                            d="M158 391V249l-82-63v175q0 30 30 30"
                          ></path>
                          <path
                            fill="#ea4335"
                            d="M154 248l102 77 102-77v-98l-102 77-102-77"
                          ></path>
                          <path
                            fill="#34a853"
                            d="M354 391V249l82-63v175q0 30-30 30"
                          ></path>
                          <path
                            fill="#c5221f"
                            d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26"
                          ></path>
                          <path
                            fill="#fbbc04"
                            d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26"
                          ></path>
                        </svg>
                        <span
                          style={{
                            lineHeight: '58px',
                            fontSize: '1.5rem',
                            paddingLeft: '20px',
                            // color: '#888',
                          }}
                        >
                          Email
                        </span>
                      </div>
                    </a>
                  </Grid>
                  <Grid item xs={6} style={{ width: '50%' }}>
                    <a
                      href="https://www.linkedin.com/in/leelasrijaalla/"
                      target="blank"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="icon-contact linkedin">
                        {/* <LinkedInIcon style={{ width: "60px", height: "60px" }} /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60px"
                          height="60px"
                          fill="none"
                          viewBox="0 0 48 48"
                        >
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            fill="#0077B5"
                          ></circle>
                          <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M18.775 14.284c0 1.245-.948 2.253-2.43 2.253-1.426 0-2.374-1.008-2.344-2.253-.03-1.306.918-2.284 2.372-2.284 1.454 0 2.373.978 2.402 2.284zM14.12 32.819V18.316h4.507v14.502H14.12v.001zM22.24 22.945c0-1.81-.06-3.352-.12-4.627h3.915l.208 1.987h.09c.592-.92 2.075-2.312 4.477-2.312 2.965 0 5.19 1.957 5.19 6.226v8.602h-4.508v-8.037c0-1.87-.652-3.144-2.283-3.144-1.246 0-1.987.86-2.283 1.69-.119.297-.178.711-.178 1.127v8.364h-4.507v-9.876h-.002z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span
                          style={{
                            lineHeight: '58px',
                            fontSize: '1.5rem',
                            paddingLeft: '20px',
                            // color: '#888',
                          }}
                        >
                          LinkedIn
                        </span>
                      </div>
                    </a>
                  </Grid>
                </Grid>
                <Grid container spacing={6} style={{ paddingTop: '20px' }}>
                  <Grid item xs={6} style={{ width: '50%' }}>
                    <a
                      href="https://github.com/SrijaAlla"
                      target="blank"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="icon-contact github">
                        {/* <GitHubIcon style={{ width: "60px", height: "60px" }} /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60px"
                          height="60px"
                          version="1.1"
                          viewBox="0 0 496 496"
                          xmlSpace="preserve"
                        >
                          <path
                            fill="#3E77BF"
                            d="M247.992 5.163C111.048 5.163 0 116.627 0 254.163c0 109.992 71.048 203.32 169.632 236.24 12.392 2.296 16.912-5.392 16.912-12 0-5.904-.216-21.56-.336-42.344-69 15.064-83.552-33.376-83.552-33.376-11.264-28.768-27.52-36.408-27.52-36.408-22.528-15.456 1.696-15.16 1.696-15.16 24.88 1.752 37.976 25.672 37.976 25.672 22.144 38.048 58.064 27.048 72.192 20.672 2.232-16.08 8.656-27.064 15.736-33.28-55.056-6.296-112.944-27.64-112.944-123.04 0-27.176 9.656-49.408 25.52-66.832-2.568-6.296-11.072-31.6 2.416-65.872 0 0 20.832-6.688 68.2 25.52 19.784-5.52 41-8.28 62.096-8.392 21.048.112 42.28 2.864 62.096 8.392 47.328-32.208 68.128-25.52 68.128-25.52 13.52 34.272 5.016 59.576 2.456 65.872 15.904 17.424 25.504 39.648 25.504 66.832 0 95.64-57.984 116.68-113.232 122.856 8.904 7.688 16.832 22.872 16.832 46.112 0 33.296-.296 60.128-.296 68.296 0 6.672 4.472 14.424 17.048 11.968C425.016 457.387 496 364.123 496 254.163c0-137.536-111.048-249-248.008-249z"
                          ></path>
                          <path
                            fill="#3E77BF"
                            d="M247.992 5.163C111.048 5.163 0 116.627 0 254.163c0 109.992 71.048 203.32 169.632 236.24 12.392 2.296 16.912-5.392 16.912-12 0-5.904-.216-21.56-.336-42.344-69 15.064-83.552-33.376-83.552-33.376-11.264-28.768-27.52-36.408-27.52-36.408-22.528-15.456 1.696-15.16 1.696-15.16 24.88 1.752 37.976 25.672 37.976 25.672 22.144 38.048 58.064 27.048 72.192 20.672 2.232-16.08 8.656-27.064 15.736-33.28-55.056-6.296-112.944-27.64-112.944-123.04 0-27.176 9.656-49.408 25.52-66.832-2.568-6.296-11.072-31.6 2.416-65.872 0 0 20.832-6.688 68.2 25.52 19.784-5.52 41-8.28 62.096-8.392 21.048.112 42.28 2.864 62.096 8.392 47.328-32.208 68.128-25.52 68.128-25.52 13.52 34.272 5.016 59.576 2.456 65.872 15.904 17.424 25.504 39.648 25.504 66.832 0 95.64-57.984 116.68-113.232 122.856 8.904 7.688 16.832 22.872 16.832 46.112 0 33.296-.296 60.128-.296 68.296 0 6.672 4.472 14.424 17.048 11.968C425.016 457.387 496 364.123 496 254.163c0-137.536-111.048-249-248.008-249z"
                          ></path>
                          <g fill="#114C82">
                            <path d="M378.496 109.131c13.128 33.904 4.752 58.928 2.2 65.176 15.904 17.424 25.504 39.648 25.504 66.832 0 95.64-57.984 116.68-113.232 122.856 8.904 7.688 16.832 22.872 16.832 46.112 0 33.296-.296 60.128-.296 68.296 0 6.672 4.472 14.424 17.048 11.968C425.016 457.387 496 364.123 496 254.163c0-29.56-5.152-57.896-14.568-84.2-34.192-36-72.248-59.976-102.936-60.832zM192.976 377.323c2.784-5.616 6.184-9.984 9.76-13.144-30.176-3.456-61.168-11.512-83.048-33.744 16.832 28.016 44.24 40.76 73.288 46.888z"></path>
                          </g>
                          <path
                            fill="#6CA9EA"
                            d="M12.912 270.947c0-137.536 111.048-249 247.992-249 76.04 0 144.056 34.392 189.536 88.488C405.52 46.755 331.616 5.163 247.992 5.163 111.048 5.163 0 116.627 0 254.163c0 61.32 22.12 117.424 58.752 160.792-28.808-40.664-45.84-90.312-45.84-144.008z"
                          ></path>
                          <path
                            fill="#083E66"
                            d="M322.712 426.899c0-23.232-7.928-38.44-16.832-46.128 55.248-6.16 113.24-27.216 113.24-122.848 0-27.184-9.6-49.4-25.52-66.824 2.576-6.296 11.096-31.608-2.456-65.872 0 0-2.576-.792-7.896-.488 5.808 25.84-.416 44.32-2.552 49.568 15.904 17.424 25.504 39.648 25.504 66.832 0 95.64-57.984 116.68-113.232 122.856 8.904 7.688 16.832 22.872 16.832 46.112 0 33.296-.296 60.128-.296 68.296 0 5.872 3.496 12.568 12.92 12.408.064-11.256.288-35.152.288-63.912z"
                          ></path>
                          <path
                            fill="#114C82"
                            d="M117.464 423.995c5.208 10.72 22.712 36.4 68.888 30.992-.064-5.648-.112-11.976-.144-18.928-35.624 7.776-56.656-1.392-68.744-12.064z"
                          ></path>
                          <path
                            fill="#6CA9EA"
                            d="M126.368 391.387a61.241 61.241 0 00-8.904-10.544c2.808 4.168 5.792 7.664 8.904 10.544z"
                          ></path>
                        </svg>
                        <span
                          style={{
                            lineHeight: '58px',
                            fontSize: '1.5rem',
                            paddingLeft: '20px',
                            // color: '#888',
                          }}
                        >
                          GitHub
                        </span>
                      </div>
                    </a>
                  </Grid>
                  <Grid item xs={6} style={{ width: '50%' }}>
                    <a
                      href="https://www.instagram.com/_srijaalla_/"
                      target="blank"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="icon-contact insta">
                        <InstagramIcon
                          style={{
                            width: '60px',
                            height: '60px',
                            color: '#F14D75',
                          }}
                        />
                        <span
                          style={{
                            lineHeight: '58px',
                            fontSize: '1.5rem',
                            paddingLeft: '20px',
                            // color: '#888',
                          }}
                        >
                          Instagram
                        </span>
                      </div>
                    </a>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '50%',
              justifyContent: 'center',
              height: '100%',
              alignItems: 'center',
              padding: '0px 20px',
            }}
            className="HideOnMobile"
          >
            <div style={{ width: '80%' }}>
              <img src={contact}></img>
            </div>
          </div>
        </div>
        <div className="HideOnMobile" style={styles3}>
          <img src={robo} style={{ maxHeight: '200px', height: '20%' }}></img>
        </div>
      </>
    </React.Fragment>
  )
}
export default Contact
