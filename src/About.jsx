import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import html from "./icons/html.svg";
import css from "./icons/css.svg";
import js from "./icons/js.svg";
import reacticon from "./icons/react.svg";
import bs from "./icons/bootstrap.svg";
import python from "./icons/python.svg";
import java from "./icons/java.svg";
import nodejs from "./icons/nodejs.svg";
import mysql from "./icons/mysql.svg";
import mongodb from "./icons/mongo.svg";
import linux from "./icons/linux.svg";
import git from "./icons/github.svg";
import docker from "./icons/docker.svg";
import kube from "./icons/kubernetes.svg";
import canva from "./icons/canva.svg";
import latex from "./icons/latex.svg";
import c from "./icons/c.svg";
import php from "./icons/php.svg";
import jquery from "./icons/jquery.svg";
import jquery_no_text from "./icons/jquery-no-text.svg";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Button from "@mui/material/Button";
import resume from "./resume/LEELA_SRIJA_ALLA_RESUME.pdf";
import opencv from "./icons/opencv.svg";
import scikit from "./icons/scikit.svg";
import pytorch from "./icons/pytorch.svg";
import flask from "./icons/flask.svg";
import tensorflow from "./icons/tensorflow.svg";
import Timeline from "./timeline.jsx";

function Experiment() {
  return (
    <div className="About">
      <div className="code-block">
        <div className="code">
          <div className="first-block">
            <span className="def">def</span>{" "}
            <span className="myJourney">srija</span>
            <span className="brackets">{"():"}</span>{" "}
            <span className="arrow">{"->"}</span>{" "}
            <span className="str">str</span>
          </div>
          <div className="second-block">
            <span className="return">return</span>{" "}
            <span className="text">"Long way to go"</span>
          </div>
          <div>
            <p class="typing"># Seeking Full time Opportunities</p>
          </div>
        </div>
      </div>
      <div>
        <span className="projects-heading animated-text">
          <span>S</span>
          <span>k</span>
          <span>i</span>
          <span>l</span>
          <span>l</span>
          <span>s</span>
        </span>
        <div className="skills">
          <div>
            <div className="tech">Front-End Technologies</div>
            <div className="icons">
              <Tooltip title="HTML">
                <IconButton aria-label="HTML">
                  <img src={html}></img>
                </IconButton>
              </Tooltip>
              <Tooltip title="CSS">
                <IconButton aria-label="CSS">
                  <img src={css}></img>
                </IconButton>
              </Tooltip>
              <Tooltip title="Java Script">
                <IconButton aria-label="JavaScript">
                  {/* <JavascriptIcon /> */}
                  <img src={js}></img>
                </IconButton>
              </Tooltip>
              <Tooltip title="React">
                <IconButton aria-label="React">
                  <img src={reacticon}></img>
                </IconButton>
              </Tooltip>
              <Tooltip title="JQuery">
                <IconButton aria-label="JQuery">
                  <img src={jquery_no_text}></img>
                </IconButton>
              </Tooltip>
              {/* <br /> */}
              <Tooltip title="Bootstrap">
                <IconButton aria-label="Bootstrap">
                  <img src={bs}></img>
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <div>
            <div className="tech"> Back-End Technologies</div>
            <div className="icons">
              <Tooltip title="Python">
                <IconButton aria-label="Python">
                  <img src={python}></img>
                </IconButton>
              </Tooltip>
              <Tooltip title="Java">
                <IconButton aria-label="Java">
                  <img src={java}></img>
                </IconButton>
              </Tooltip>
              <Tooltip title="PHP">
                <IconButton aria-label="Php">
                  <img src={php}></img>
                </IconButton>
              </Tooltip>
              <Tooltip title="Node JS">
                <IconButton aria-label="nodejs">
                  <img src={nodejs}></img>
                </IconButton>
              </Tooltip>
              <Tooltip title="My SQL">
                <IconButton aria-label="sql">
                  <img src={mysql}></img>
                </IconButton>
              </Tooltip>
              {/* <br /> */}
              <Tooltip title="Mongo DB">
                <IconButton aria-label="Mongo DB">
                  <img src={mongodb}></img>
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <div>
            <div className="tech">Python Frameworks</div>
            <div className="icons">
              <Tooltip title="OpenCV">
                <IconButton aria-label="Git">
                  <img src={opencv}></img>
                </IconButton>
              </Tooltip>
              <Tooltip title="TensorFlow">
                <IconButton aria-label="Linux">
                  <img src={tensorflow}></img>
                </IconButton>
              </Tooltip>
              <Tooltip title="Scikit Learn">
                <IconButton aria-label="Docker">
                  <img src={scikit}></img>
                </IconButton>
              </Tooltip>
              <Tooltip title="Pytorch">
                <IconButton aria-label="kubernetes">
                  <img src={pytorch}></img>
                </IconButton>
              </Tooltip>
              <Tooltip title="Flask">
                <IconButton aria-label="Canva">
                  <img src={flask}></img>
                </IconButton>
              </Tooltip>
              {/* <br /> */}
            </div>
          </div>
          <div>
            <div className="tech">Other Tools & Technologies</div>
            <div className="icons">
              <Tooltip title="Git">
                <IconButton aria-label="Git">
                  <img src={git}></img>
                </IconButton>
              </Tooltip>
              <Tooltip title="Linux">
                <IconButton aria-label="Linux">
                  <img src={linux}></img>
                </IconButton>
              </Tooltip>
              <Tooltip title="Docker">
                <IconButton aria-label="Docker">
                  <img src={docker}></img>
                </IconButton>
              </Tooltip>
              <Tooltip title="Kubernetes">
                <IconButton aria-label="kubernetes">
                  <img src={kube}></img>
                </IconButton>
              </Tooltip>
              <Tooltip title="Canva">
                <IconButton aria-label="Canva">
                  <img src={canva}></img>
                </IconButton>
              </Tooltip>
              {/* <br /> */}
              <Tooltip title="C">
                <IconButton aria-label="C">
                  <img src={c}></img>
                </IconButton>
              </Tooltip>
              <Tooltip title="Latex">
                <IconButton aria-label="Latex">
                  <img src={latex}></img>
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <div className="animated-text-about projects-heading-about dropping-div">
          <span>Interests</span>
          <span> </span> <span>&</span> <span>Expertise</span>
        </div> */}
        <div></div>
        <div className="parent-div">
          <div className="resume-about dropping-div">
            <a href={resume} target="_blank">
              <Button size="large" className="resume-button">
                <FileDownloadIcon style={{ color: "white" }} />
                <span className="resume-text">Resume</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="animated-text projects-heading">
        <span>Skills</span>
      </div> */}
      {/* <Timeline /> */}
    </div>
  );
}

export default Experiment;
