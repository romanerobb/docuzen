import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Button } from "@mui/material";

export default function Navbar() {

    const navigate = useNavigate();
    
    return (
        
        <nav>
            <Button variant="outlined" color="primary" href="/">Home</Button>
            <span> </span>
            <Button variant="outlined" color="success" href="/login">Pricing</Button>
            <span> </span>
            <Button variant="outlined" color="warning" href="/register">Partner Up!</Button>
            <span> </span>
            <Button variant="outlined" color="error" href="/menu">About Us</Button>
            <span> </span>
            <Button variant="outlined" color="secondary" href="/contact">Contact</Button>
            <br></br>
        </nav>
    );
}