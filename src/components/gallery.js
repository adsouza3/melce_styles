import React, { useMemo, useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Col, Container, Image, Row } from 'react-bootstrap';

import Layout from './shared/layout';

const Gallery = () => {
  const imgCount = 4;
  const [lightboxOpen, setLightboxOpen] = useState()

  const getUrl = (index, hack) => `${process.env.PUBLIC_URL}/gallery/gal${index + 1}.jpg`;

  const handleOpenLightbox = (index) => {
    setLightboxOpen(true);
  };


  const urls = useMemo(() => {
    let urls = [];

    for (let i = 0; i < imgCount; i++) {
      urls.push(getUrl(i));
    }

    return urls;
  }, []);


  const rows = useMemo(() => {
    let rows = [];

    for (let i = 0; i < imgCount; i += 2) {
      rows.push(
        <Row key={i}>
          <Col xs={6} md={6}>
            <Image src={getUrl(i)} fluid rounded onClick={() => handleOpenLightbox(i)}/>
          </Col>
          {i < imgCount - 1 && <Col xs={6} md={6}>
            <Image src={getUrl(i + 1)} fluid rounded onClick={() => handleOpenLightbox(i + 1)}/>
          </Col>}
        </Row>
      )
    }

    return rows;
  }, []);
  
  return <>
    <Layout>
      <Container fluid>
        {rows}
      </Container>
    </Layout>

    <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={urls.map(url => ({ src: url }))}
      />
  </>;
};

export default Gallery;