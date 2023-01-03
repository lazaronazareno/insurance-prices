import React from 'react'
import './Spinner.css'
import styled from '@emotion/styled'

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`

const Spinner = () => {
  return (
    <SpinnerContainer>
      <div className='sk-chase'>
        <div className='sk-chase-dot' />
        <div className='sk-chase-dot' />
        <div className='sk-chase-dot' />
        <div className='sk-chase-dot' />
        <div className='sk-chase-dot' />
        <div className='sk-chase-dot' />
      </div>
    </SpinnerContainer>
  )
}

export default Spinner
