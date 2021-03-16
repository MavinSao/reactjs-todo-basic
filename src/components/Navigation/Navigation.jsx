import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import './Navigation.css'

function Navigation() {
    return (
        <>
          <Navbar variant="dark">
            <Container>
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="https://zenkit.com/wp-content/uploads/2020/04/zenkit-todo-table-icon.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            <span className="text-pink">Todo List</span>
            </Navbar.Brand>
            </Container>
        </Navbar>
        </>
    )
}

export default Navigation
