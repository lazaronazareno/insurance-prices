import React, { useState } from 'react'
import styled from '@emotion/styled'
import { calculateBrand, getPlan, getYearDifference } from '../utils'
import PropTypes from 'prop-types'

const FieldDiv = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`

const Label = styled.label`
  flex: 0 0 100px;
`

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`

const InputRadio = styled.input`
  margin: 0 1rem;
`

const Button = styled.button`
  background-color: #9444;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #944444;
    color: white;
  }
`
const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`

const Form = ({ setResume, setLoading }) => {
  const [values, setValues] = useState({
    brand: '',
    year: '',
    plan: ''
  })
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
      setError(true)
      return
    }

    setError(false)

    let base = 2000
    const difference = getYearDifference(year)
    base -= ((difference * 3) * base) / 100

    base = calculateBrand(brand) * base

    const plusPlan = getPlan(plan)
    base = parseFloat(base * plusPlan).toFixed(2)

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setResume({
        price: Number(base),
        values
      })
    }, 3000)
  }

  const { brand, year, plan } = values
  return (
    <form
      onSubmit={handleSubmit}
    >
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <FieldDiv>
        <Label>Marca</Label>
        <Select
          name='brand'
          value={brand}
          onChange={handleChange}
        >
          <option value=''>-- Seleccione --</option>
          <option value='american'>Americano</option>
          <option value='european'>Europeo</option>
          <option value='asian'>Asiatico</option>
        </Select>
      </FieldDiv>
      <FieldDiv>
        <Label>Año</Label>
        <Select
          name='year'
          value={year}
          onChange={handleChange}
        >
          <option value=''>-- Seleccione --</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
          <option value='2017'>2017</option>
          <option value='2016'>2016</option>
          <option value='2015'>2015</option>
          <option value='2014'>2014</option>
          <option value='2013'>2013</option>
        </Select>
      </FieldDiv>

      <FieldDiv>
        <Label>Plan</Label>
        <InputRadio
          type='radio'
          name='plan'
          value='basic'
          checked={plan === 'basic'}
          onChange={handleChange}
        /> Basico
        <InputRadio
          type='radio'
          name='plan'
          value='full'
          checked={plan === 'full'}
          onChange={handleChange}
        /> Completo
      </FieldDiv>

      <Button type='submit'>Cotizar</Button>
    </form>
  )
}

Form.propTypes = {
  setResume: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
}

export default Form
