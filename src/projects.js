import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import om from './assets/pm.png'
import './Home.css'
import ResponsiveGrid from './responsivegrid'
const useStyles = makeStyles((theme) => ({
  experience: {
    color: 'white',
    width: '100%',
    height: '100%',
    fontSize: '1rem',
  },
  expdes: {
    marginLeft: '20px',
  },

  jobdes: {
    maxWidth: '550px',
    // marginLeft: '20px',
    display: 'flex',
  },
  company: {
    display: 'block',
  },
  duration: {
    marginLeft: '40px',
  },
  projectsdiv: {
    padding: '20px 40px',
    // overflow: 'auto',
    // overflow: 'scroll',
  },
  hyphen: {
    marginLeft: '20px',
    // fontWeight: 'lighter',
  },
  projects: {
    height: '100%',
    width: '80%',
    marginBottom: '40px',
  },
}))
const Projects = () => {
  const projects = []
  const classes = useStyles()
  return (
    <React.Fragment>
      <div
        style={{
          marginTop: '70px',
          // paddingTop: '70px',
          // overflow: 'auto',
          // position: 'absolute',
          // overflowY: 'auto',
          backgroundColor: 'black',
          padding: '30px 40px 30px 40px',
        }}
        className="workdiv"
      >
        <div>
          <div>
            <div
              style={{ fontSize: '2rem', color: 'white', padding: '20px 0px' }}
            >
              Experience
            </div>
            <div className="experiencewrap">
              <div className={classes.experience}>
                Software Engineer
                <span className={classes.expdes}>-</span>
                <span className={classes.hyphen}>Full-time</span>
                <span className={classes.company}>
                  One Convergence Devices Pvt Ltd
                  <span className={classes.duration}>
                    August 2022 to April 2023
                  </span>
                </span>
                <span className={classes.jobdes}>
                  <ul>
                    <li>
                      Experienced Developer for DKube’s MLOps platform to
                      simplify ML model implementation for developers
                    </li>
                    <li>Hands-on experince in Kubernetes, Docker</li>
                  </ul>
                </span>
              </div>
              <div className={classes.experience}>
                Web Developer
                <span className={classes.expdes}>-</span>
                <span className={classes.hyphen}>Intern</span>
                <span className={classes.company}>
                  Jindal Trading Corperation
                  <span className={classes.duration}>
                    August 2022 to April 2023
                  </span>
                </span>
                <span className={classes.jobdes}>
                  <ul>
                    <li>Built an e-commerce website for the company </li>
                    <li>Learnt ReactJS</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ fontSize: '2rem', color: 'white', padding: '20px 0px' }}
            >
              Projects
            </div>
            <div className={classes.projectsdiv}>
              <ResponsiveGrid />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Projects
