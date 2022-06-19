import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Button } from "@mui/material";

export default function Navbar() {

    const navigate = useNavigate();
    
    return (
        
        <nav>
            <Button variant="outlined" color="error" href="/">Home</Button>
            <span> </span>
            <Button variant="outlined" color="primary" href="/register">Register</Button>
            <span> </span>
            <Button variant="outlined" color="success" href="/pricing">Pricing</Button>
            <span> </span>
            <Button variant="outlined" color="warning" href="/partnerup">Partner Up!</Button>
            <span> </span>
            <Button variant="outlined" color="error" href="/about">About Us</Button>
            <span> </span>
            <Button variant="outlined" color="secondary" href="/contact">Contact</Button>
            <br></br>
        </nav>
    );
}