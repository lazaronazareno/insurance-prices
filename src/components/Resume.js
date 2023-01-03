import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  background-color: #9444;
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: 500;
`

const ItemsDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: 400;
`

const Resume = ({ values }) => {
  const { brand, year, plan } = values

  if (brand === '' || year === '' || plan === '') return null

  return (
    <ResumeContainer>
      <span>Resumen de cotizacion</span>
      <ItemsDiv>
        <span>Marca : {brand}</span>
        <span>Año : {year}</span>
        <span>Plan : {plan}</span>
      </ItemsDiv>
    </ResumeContainer>
  )
}

Resume.propTypes = {
  values: PropTypes.object.isRequired
}

export default Resume
