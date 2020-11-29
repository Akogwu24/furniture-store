import React from 'react'
import styled from 'styled-components';
import Search from '../components/common/Search';
import { Container } from './Grid';

import amazon from '../assets/icons/payment-icon-amazon.png'
import amex from '../assets/icons/payment-icon-amex.png'
import mastercard from '../assets/icons/payment-icon-mastercard.png'
import paypal from '../assets/icons/payment-icon-paypal.png'
import visa from '../assets/icons/payment-icon-visa.png'

function Footer() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col w="40%">
            <Search />
          </Col>
          <Col w="40%">
            <Row className="footerlinks">
              <Col>
                <p>Link 1</p>
                <p>Link 1</p>
                <p>Link 1</p>
                <p>Link 1</p>
              </Col>
              <Col>
                <p>Link 1</p>
                <p>Link 1</p>
                <p>Link 1</p>
                <p>Link 1</p>
              </Col>
              <Col>
                <p>Link 1</p>
                <p>Link 1</p>
                <p>Link 1</p>
                <p>Link 1</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{marginTop: '14rem'}}>
          <Copyright>
            <p>Copyright 2020 | AmakaWare LLC</p>
          </Copyright>
          <PaymentIcons>
            <img src={amazon} alt="icon"/>
            <img src={amex} alt="icon"/>
            <img src={mastercard} alt="icon"/>
            <img src={paypal} alt="icon"/>
            <img src={visa} alt="icon"/>
          </PaymentIcons>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  width: 100;
  padding-top: 10rem;
  border-top: 1px solid rgba(0,0,0,.1);
  margin-top: 10rem;
`

const Row = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;

  .footerlinks {
    p {
      color: #777;
      margin-bottom: 1.5rem;
    }
  }
`

const Col = styled.div`
  width: ${(props) => props.w || 'auto'};
`

const Copyright = styled.div`
  p {
    color: #777;
  }
`

const PaymentIcons = styled.div`
  display: flex;

  img {
    margin-right: 1rem;
    width: 6rem;

    &:last-of-type {
      margin-right: 0px;
    }
  }
`