import React from 'react'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

const Msj = styled.p`
  background-color: antiquewhite;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`

const Price = styled.p`
  background-color: antiquewhite;
  color: slateblue;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
`

const Result = ({ price }) => {
  return (
    (price === 0)
      ? <Msj>Elige Marca, Año y Tipo de seguro</Msj>
      : <>
        <TransitionGroup
          component='span'
          className='result'
        >
          <CSSTransition
            classNames='result'
            key={price}
            timeout={{ enter: 500, exit: 500 }}
          >
            <Price>El total es: $<span>{price}</span></Price>
          </CSSTransition>
        </TransitionGroup>
        {// eslint-disable-next-line react/jsx-closing-tag-location
}      </>
  )
}

Result.propTypes = {
  price: PropTypes.number.isRequired
}

export default Result
