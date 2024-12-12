import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import Card from './Card';
const Header = () => {
    const [isOpen,setIsopen] = useState(false);
    const toggle = ()=>{
        setIsopen(!isOpen);
    }
    
    return (
        <div>
            <Navbar color='dark' dark  expand="md"
            className='mt-3 shadow-sm p-2'
            >
                <NavbarBrand href="/">
                Card-App from Context Api 
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="">Ürünler</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav>
                        <Card></Card>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header
