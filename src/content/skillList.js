import { 
    FaNodeJs as NodeJS, 
    FaCss3 as CSS,
    FaGitAlt as Git,
    FaLinux as Linux,
    FaAdobe as Adobe,
    FaReact as React
} from 'react-icons/fa'
import {MdCached as Query} from 'react-icons/md'
import {
  RiPaintBrushFill as Styled
} from 'react-icons/ri'
import { 
    DiJavascript1 as Javascript 
} from 'react-icons/di'

import {
    AiOutlineCloudServer as Nginx
} from 'react-icons/ai'

import {
    GiJesterHat as Jest
} from 'react-icons/gi'


export const skillList = [
    {
        "name" : "HTML & CSS",
        "description" : "Flexbox, grid & responsive layout." ,
        "icon" : CSS,
        "color" : '#E8904C'
    },
    {
        "name" : "React",
        "description" : "Context API, hooks and react-router." ,
        "icon" : React,
        "color" : '#70B7E7'
    },
    {
      "name" : "Javascript",
      "description" : "Promises, array methods, generators." ,
      "icon" : Javascript,
      "color" : '#6EDA96'
  },
    {
      "name" : "React Query",
      "description" : "Query hooks & configuration." ,
      "icon" : Query,
      "color" : '#6c72dd'
    },
    {
      "name" : "Styled Components",
      "description" : "+ PolishedJS" ,
      "icon" : Styled,
      "color" : '#dd66b1'
  },
    
    {
        "name" : "Git",
        "description" : "+ GitHub / GitLab" ,
        "icon" : Git,
        "color" : '#D56DB2'
    },
    {
        "name" : "Jest & NPM",
        "description" : "Basic unit testing and package management." ,
        "icon" : Jest,
        "color" : '#33BA3D'
    },
    
    {
        "name" : "Adobe Suite",
        "description" : "XD, Photoshop & After Effects." ,
        "icon" : Adobe,
        "color" : '#E27171'
    },
    {
        "name" : "Linux / BASH",
        "description" : "Basic commands - SSH, directory traversal." ,
        "icon" : Linux,
        "color" : '#7180E1'
    }
]