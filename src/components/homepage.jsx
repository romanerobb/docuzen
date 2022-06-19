import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default function HomePage() {

    const navigate = useNavigate();
    
    return (
<>
<br></br>
<Typography> Quick Pitch: We're a cloud-based, Knowledge management platform.</Typography>
<br></br>
<p>DocuZen is a modern cloud-based SaaS company that strictly handles Knowledge Management. <br></br>
It allows for companies to not only create community documentation for their company but properly maintain it as well.</p>
</>
    );
}