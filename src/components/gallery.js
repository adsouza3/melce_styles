import React from 'react';

import { Col, Container, Image, Row } from 'react-bootstrap';

import Layout from './shared/layout';

const About = () => {
  return (
    <Layout>
      Check out these pics
      <Container fluid>
        <Row>
          <Col xs={6} md={6}>
            <Image src={`${process.env.PUBLIC_URL}/gallery/gal1.jpg`} fluid rounded />
          </Col>
          <Col xs={6} md={6}>
            <Image src={`${process.env.PUBLIC_URL}/gallery/gal2.jpg`} fluid rounded />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <Image src={`${process.env.PUBLIC_URL}/gallery/gal3.jpg`} fluid rounded />
          </Col>
          <Col xs={6} md={6}>
            <Image src={`${process.env.PUBLIC_URL}/gallery/gal4.jpg`} fluid rounded />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default About;