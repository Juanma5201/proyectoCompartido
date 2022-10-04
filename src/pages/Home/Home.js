import React from 'react'
import { Container } from 'react-bootstrap'
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <Container>
        <h1 className='my-5'>Bienvenidos a React Router DOM</h1>
        <br />
        <Link to="/users">Ve a la pagina users</Link>
    </Container>
  )
}
