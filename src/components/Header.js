import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const HeaderContainer = styled.header`
background-color:#262425;
padding: 1vh;
font-weight: bold;
color: #FFFFFF;`

const HeaderText = styled.h1`
font-size: 2rem;
margin:0;
text-align:center;
`

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderText>{title}</HeaderText>
    </HeaderContainer>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
