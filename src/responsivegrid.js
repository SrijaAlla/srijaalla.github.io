import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { useNavigate } from 'react-router-dom'

import om from './assets/om.png'
import games2 from './assets/17mcme18_project.png'
import vehicle from './assets/21.jpg'
import check from './assets/check.png'
import ugate from './assets/ugate.jpg'
import traffic from './assets/traffic.webp'
import pathfinder from './assets/pathfinder.png'

const useStyles = makeStyles((theme) => ({
  projectimage: {
    objectFit: 'cover',
    height: '90%',
    width: '100%',
  },
  imagewrap: {
    height: '90%',
    width: '100%',
  },
  title: {
    color: 'white',
  },
  description: {
    color: 'white',
  },
}))

export default function ResponsiveGrid() {
  const classes = useStyles()

  const projectlist = [
    {
      name: 'Opinion Maximization in Signed Social Network',
      // description:
      //   'Three Heuristics were introduced and implemented to maximize a certain viewpoint in social network',
      description: '',
      image: om,
      link: 'https://github.com/SrijaAlla/OM',
    },
    {
      name: 'Pen Ink differentation in hand -written documents',
      // description: 'Detecting fraud in bank checks',
      description: '',
      image: check,
      link:
        'https://github.com/AnuragAnalog/Pen-Ink-Differentiation-for-Hand-Written-Document-Forensics',
    },
    {
      name: 'Preferential attachment in play store games network',
      description: '',
      // description:
      //   'Scraped through play store games data to build a network and find communities, preferential attachment of users',
      image: games2,
      link: 'https://github.com/SrijaAlla/Play-store-games-scraping',
    },
    {
      name: 'Vehicle Collision and Alchohol detection System',
      description: '',
      // description: 'Aims at maximizing opinion in signed social networks',
      image: vehicle,
    },
    {
      name: 'Traffic Management and Monitoring using IoT',
      // description:
      //   'Design a computer vision-based application to manage and monitor traffic using the Internet of Things',
      description: '',
      image: traffic,
    },
    {
      name: 'Web Application for automated gate management',
      description: '',
      // description:
      // 'Conduct surveys on human intervention in gate management and design an application to automate gate management and visitor management in software engineering methods.',
      image: ugate,
      link: 'https://github.com/SrijaAlla/UGATE',
    },
    {
      name: 'Web Appplication for video streaming',
      description: '',
      // description:
      //   'Basic web application as part of learning html, php and SQL',
      link: 'https://github.com/SrijaAlla/WebApp',
    },
    {
      name: 'Path finder',
      description: '',
      // description:
      //   'Simple Code to find path given dimensions of grid and randomly assiging obstacles with one solution',
      image: pathfinder,
    },
  ]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 4, md: 12 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {projectlist.map((i, index) => (
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            key={index}
            // onClick={handleClick(i.link)}
          >
            {/* <Item> */}
            <a href={i.link} target="_blank" style={{ textDecoration: 'none' }}>
              <div className={classes.imagewrap}>
                <img className={classes.projectimage} src={i.image}></img>
              </div>
              {/* </Item> */}
              <div className={classes.title}>{i.name}</div>
              {/* <div className={classes.description}>{i.description}</div> */}
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
