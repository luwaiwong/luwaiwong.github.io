import React from 'react'

import Links from '../Menus/Links/Links.jsx'
import SideMenu from "../Menus/SideMenu/SideMenu.jsx"
import Landing from './Landing Page/Landing.jsx'
import HomeProjects from './HomeProjects/HomeProjects.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import * as colors from '../../colors.js'

import { BufferSection, Section, SeperationLine, UnderConstructionText } from "./HomeStyles.js"

import {} from "react-awesome-reveal"



const background = {
  backgroundColor: colors.BACKGROUND,



  zIndex: -1,
  width: "100vw",
  height: "100vh",
  top: "100vh",
  left:"0"
}



const Home = (props) => (
  <>
    {/* <SideMenu/> */}
    <Links/>

    {/* INTRO SECTION */}
    <Landing/>

    <About/>

    <BufferSection/>
    <HomeProjects/>

    <Contact/>
  </>
);

export default Home;
