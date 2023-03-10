import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar(){
    const {openCart, cartQuantity} = useShoppingCart()
    return <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link  className="me-5" to={"/"} as={NavLink}>
                    Animation Domination
                </Nav.Link>
                <Nav.Link to={"/"} as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to={"/subscribe"} as={NavLink}>
                    Subscribe
                </Nav.Link>
                <Nav.Link to={"/store"} as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to={"/about"} as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
            
            <Button
                onClick={openCart}
                style={{width: "3rem", height: "3rem", position:"relative"}}
                variant="outline-primary" className="rounded-circle"
            >
            <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="m20.756 5.345c-.191-.219-.466-.345-.756-.345h-13.819l-.195-1.164c-.08-.482-.497-.836-.986-.836h-2.25c-.553 0-1 .447-1 1s.447 1 1 1h1.403l1.86 11.164.045.124.054.151.12.179.095.112.193.13.112.065c.116.047.238.075.367.075h11.001c.553 0 1-.447 1-1s-.447-1-1-1h-10.153l-.166-1h11.319c.498 0 .92-.366.99-.858l1-7c.041-.288-.045-.579-.234-.797zm-1.909 1.655-.285 2h-3.562v-2zm-4.847 0v2h-3v-2zm0 3v2h-3v-2zm-4-3v2h-3l-.148.03-.338-2.03zm-2.986 3h2.986v2h-2.653zm7.986 2v-2h3.418l-.285 2z"/>
                <circle cx="8.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/>
            </svg>
            {cartQuantity > 0 && (
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
            style={{
                color:"white", 
                width:"1.5rem", 
                height:"1.5rem", 
                position:"absolute", 
                bottom: 0, 
                right: 0, 
                transform: "translate(25%, 25%)",
                }}>
                {cartQuantity}
            </div>
            )}
            </Button>
        </Container>
    </NavbarBs>
}