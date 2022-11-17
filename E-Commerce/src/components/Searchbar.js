import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
function Searchbar() {
    const [keyword, setKeyword] = useState('')
    
    let history = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <Form onSubmit={submitHandler} inline bg-warning>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5 outline-warning'
            ></Form.Control>
        <div className="p-3"> 

             <Button
                type='submit'
                variant='outline-warning'
                className='p-2  '
            >
                
                Buscar productos
            </Button>
            
        </div>
           
        </Form>
    )
}

export default Searchbar