import './App.css'
import styled from '@emotion/styled'
import Header from './components/Header'
import Form from './components/Form'
import { useState } from 'react'
import Resume from './components/Resume'
import Result from './components/Result'
import Spinner from './components/Spinner'

const AppContainer = styled.div`
max-width:80vw;
margin:0 auto;
`

const FormContainer = styled.div`
background-color: #FFF;
padding: 2rem;
`

function App () {
  const [resume, setResume] = useState({
    price: 0,
    values: {
      brand: '',
      year: '',
      plan: ''
    }
  })
  const [loading, setLoading] = useState(false)

  const { values, price } = resume

  return (
    <AppContainer className='App'>
      <Header
        title='Cotizador Seguros'
      />

      <FormContainer>
        <Form
          setResume={setResume}
          setLoading={setLoading}
        />
        {loading ? <Spinner /> : null}
        {!loading
          ? <>
            <Resume values={values} />
            <Result price={price} />
            {// eslint-disable-next-line react/jsx-closing-tag-location
}          </>
          : null}
      </FormContainer>
    </AppContainer>
  )
}

export default App
