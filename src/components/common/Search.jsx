import React from 'react'
import styled from 'styled-components';

import search from '../../assets/icons/search.svg'

function Search() {
  return (
    <Searchbar>
      <input type="text" placeholder="Product search"/>
      <img alt="search" src={search} />
    </Searchbar>
  )
}

export default Search

const Searchbar = styled.div`
  border-bottom: 1px solid rgba(0,0,0,.2);
  width: 400px;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  
  input {
    border: none;
  }

  img {
    width: 2rem;
  }
`
