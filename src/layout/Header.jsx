import React from 'react'
import styled from 'styled-components';

import user from '../assets/icons/user.svg'
import cart from '../assets/icons/shopping-bag.svg'
import menu from '../assets/icons/menu.svg'
import caretDown from '../assets/icons/down-arrow.svg'
import { Container } from './Grid';
import Search from '../components/common/Search';

function Header() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Logo className="logo" src="https://amakaware.com/wp-content/uploads/2020/10/Mask-Group-3.png" />
          <Search />
          <Icons>
            <img alt="avatar" src={user} className="profile" />
            <img alt="cart" src={cart} className="cart" />
          </Icons>
        </Row>
        <SecondRow>
          <Dropdown>
            <img src={menu} alt="menu"/>
            <p>Browse Categories</p>
            <img src={caretDown} alt="caret"/>
          </Dropdown>
          <Menu>
            <a href="/">Home</a>
            <a href="/">Jewelry</a>
            <a href="/">Bracelets</a>
            <a href="/">Wallets</a>
            <a href="/">Backpacks</a>
            <a href="/">Men</a>
            <a href="/">Women</a>
          </Menu>
          <Help href="/">Help Center</Help>
        </SecondRow>
      </Container>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  width: 100%;
  padding-top: 1.5rem;
  border-bottom: 1px solid rgba(0,0,0,.2)
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const SecondRow = styled(Row)`  
  align-items: center;
  margin-top: 3rem;
`

const Logo = styled.img`
  width: 130px;
`

const Icons = styled.div`
  display: flex;

  img {
    width: 3rem;
    margin: 0 1.2rem;
  }
`

const Dropdown = styled.div`
  padding: 1.5rem 2rem;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #C4B683;
  }

  img {
    width: 2rem;
  } 

  img:first-of-type {
    transform: rotate(180deg)
  }

  img:last-of-type {
    width: 1.5rem;
  }

  p {
    margin: 0 1rem;
  }
`

const Menu = styled.div`
  a {
    font-weight: 600;
    font-size: 1.5rem;
    margin: 0 1rem;
    color: #000;
  }
`

const Help = styled.a`
  color: #000;
  opacity: .4;
`