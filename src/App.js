import React from 'react'
import './App.css'
import { Brand, CTA, Navbar } from './components';
import {Blog, Header, Feature, Footer, WhatGPT3, Possibility} from './containers';
const app = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog/>
      <Footer/>
    </div>
  )
}

export default app