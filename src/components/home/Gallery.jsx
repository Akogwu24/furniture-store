import React from 'react'
import styled from 'styled-components';
import { Container } from '../../layout/Grid';

import img1 from '../../assets/images/gallery1.jpg'
import img2 from '../../assets/images/gallery2.jpg'
import img3 from '../../assets/images/gallery3.jpg'

function Gallery() {
  return (
    <Wrapper>
      <Container>
        <ImageGallery>
          <div className="col" style={{marginRight: '1rem'}}>
            <img className="long" src={img3} alt="gallery" />
          </div>
          <div className="col">
            <div>
              <img className="short" src={img1} alt="gallery" />
            </div>
            <div>
              <img className="short" src={img2} alt="gallery" />
            </div>
          </div>
        </ImageGallery>
      </Container>
    </Wrapper>
  )
}

export default Gallery

const Wrapper = styled.section`
  width: 100%;
  margin-top: 10rem;
`

const ImageGallery = styled.div`
  width: 100%;
  display: flex;

  div {
    overflow: hidden;
  }

  .col {
    width: 50%;
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    transition: all .5s;

    &:hover {
      transform: scale(1.1)
    }
  }

  .long {
    height: 700px;
  }

  .short {
    height: 342.5px;
    
    &:first-of-type {
      margin-bottom: 1rem;
    }
  }
`



