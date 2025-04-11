import React from 'react';

import { Col, Container, Image, Row } from 'react-bootstrap';

import Layout from './shared/layout';

const About = () => {
  return (
    <Layout>
        <h1>About Me(l)</h1>
        <Image src={`${process.env.PUBLIC_URL}/lydia.png`} fluid rounded />

        <p>Hi, my name's sMel.  I don't just cut hair.  I'm passionate about giving mullets to 
          zoomer chicks.  When I'm not at the salon, I enjoy endlessly scrolling social media with 
          my weird Polish husband, Nick.  I also love eating vegetables like a rabbit (especially lettuce!).
        </p>
    </Layout>
  )
};

export default About;