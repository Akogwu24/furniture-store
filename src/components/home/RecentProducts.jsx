import React from 'react'
import styled from 'styled-components';
import { Container } from '../../layout/Grid';

import pr1 from '../../assets/images/pr1.jpg'
import pr2 from '../../assets/images/pr2.jpg'
import pr3 from '../../assets/images/pr3.jpg'
import pr4 from '../../assets/images/pr4.jpg'

function RecentProducts() {
  return (
    <Wrapper>
      <Container>
        <SectionHeader>
          <h3>Recent Products</h3>
          <h6>Add our new arrivals to your weekly lineup</h6>
        </SectionHeader>
        <ProductGrid>
          <ProductCard>
            <img src={pr1} alt="product"/>
            <p>Product name</p>
            <p>$30.99</p>
          </ProductCard>
          <ProductCard>
            <img src={pr2} alt="product"/>
            <p>Product name</p>
            <p>$30.99</p>
          </ProductCard>
          <ProductCard>
            <img src={pr3} alt="product"/>
            <p>Product name</p>
            <p>$30.99</p>
          </ProductCard>
          <ProductCard>
            <img src={pr4} alt="product"/>
            <p>Product name</p>
            <p>$30.99</p>
          </ProductCard>
        </ProductGrid>
      </Container>
    </Wrapper>
  )
}

export default RecentProducts

const Wrapper = styled.section`
  width: 100%;
`

const SectionHeader = styled.header`
  text-align: center;

  h3 {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
  }

  h6 {
    font-size: 1.6rem;
    color: #777;
    font-weight: 500;
  }
`

const ProductGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7rem;
`

const ProductCard = styled.div`
  width: 300px;
  margin-right: 2rem;

  &:last-of-type {
    margin-right: 0;
  }

  img {
    width: 100%;
  }

  p {
    font-weight: 200;
    font-size: 1.4rem;
    margin: 1rem 0;
  }
`