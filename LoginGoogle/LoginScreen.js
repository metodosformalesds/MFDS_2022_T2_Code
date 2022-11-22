import React, { useState, useEffect, Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import {GoogleLogin} from "react-google-login"
import LoginButton from './login'
const clientId="795948132843-dcfvnj4f58c0jisogn9qfqnsg20hat0f.apps.googleusercontent.com"

function LoginScreen({ location, history }) {

//Datos para el login
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
    

    return (
        <FormContainer>
            <h1>Iniciar sesion</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}

            <Form onSubmit={submitHandler}>

                <Form.Group controlId='email'>
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Correo'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Inicar sesion
                </Button>
                <br></br>
                <LoginButton>

                </LoginButton>
       

            </Form>
            <Row className='py-3'>
                <Col>
                    No tienes cuenta? <Link
                        to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Registrate!
                        </Link>
                </Col>
            </Row>

        </FormContainer>
    )
}

export default LoginScreen
