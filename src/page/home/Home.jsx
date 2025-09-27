import React from 'react'
import Header from '../../components/headerhome/Header'
import Socialmedia from '../../components/socialmedia/Socialmedia';
import Service from '../service/Service';
import About from '../about/About';
import Project from '../Project/Project';

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Service />
      <Project/>
      <Socialmedia />
    </div>
  );
}

export default Home